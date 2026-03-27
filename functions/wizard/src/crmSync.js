const normalizeText = (value) => (typeof value === 'string' ? value.trim() : '')

const parseBoolean = (value, fallback = false) => {
  const normalized = normalizeText(value).toLowerCase()
  if (!normalized) {
    return fallback
  }

  return ['true', '1', 'yes', 'on'].includes(normalized)
}

const toBudgetReference = (budgetCode) => {
  const budgetMap = {
    '5k-15k': 10000,
    '15k-30k': 22500,
    '30k-50k': 40000,
    '50k-100k': 75000,
    '100k+': 100000,
  }

  return budgetMap[budgetCode] ?? null
}

const ensureV1Endpoint = (endpoint) => {
  const clean = normalizeText(endpoint).replace(/\/$/, '')
  return clean.endsWith('/v1') ? clean : `${clean}/v1`
}

const toCrmLeadPayload = (wizardPayload) => {
  const projectType = wizardPayload.tipoProyectoLabel || wizardPayload.tipoProyecto || 'Sin especificar'
  const timeline = wizardPayload.timelineLabel || wizardPayload.timeline || 'Sin especificar'
  const budget = wizardPayload.presupuestoLabel || wizardPayload.presupuesto || 'Sin especificar'

  const messageParts = [
    `Proyecto: ${projectType}`,
    `Timeline: ${timeline}`,
    `Presupuesto: ${budget}`,
    '',
    'Problema / necesidad:',
    wizardPayload.problema || 'No especificado',
    '',
    'Usuarios objetivo:',
    wizardPayload.usuarios || 'No especificado',
  ]

  if (wizardPayload.comentariosExtra) {
    messageParts.push('', 'Comentarios extra:', wizardPayload.comentariosExtra)
  }

  return {
    name: normalizeText(wizardPayload.nombre),
    email: normalizeText(wizardPayload.email).toLowerCase(),
    phone: normalizeText(wizardPayload.telefono),
    company: '',
    source: 'web',
    status: 'new',
    message: messageParts.join('\n').slice(0, 5000),
    budget: toBudgetReference(wizardPayload.presupuesto),
    metadata: {
      externalSource: 'racoondevs-wizard',
      projectType: wizardPayload.tipoProyecto || null,
      projectTypeLabel: wizardPayload.tipoProyectoLabel || null,
      style: wizardPayload.estiloVisual || null,
      styleLabel: wizardPayload.estiloVisualLabel || null,
      timeline: wizardPayload.timeline || null,
      timelineLabel: wizardPayload.timelineLabel || null,
      budgetCode: wizardPayload.presupuesto || null,
      budgetLabel: wizardPayload.presupuestoLabel || null,
      features: Array.isArray(wizardPayload.funcionalidades) ? wizardPayload.funcionalidades : [],
      extraFeatures: normalizeText(wizardPayload.funcionalidadesExtra),
      references: normalizeText(wizardPayload.referenciasVisuales),
      preferredContact: normalizeText(wizardPayload.contactoPreferido),
      submittedAt: wizardPayload.submittedAt || new Date().toISOString(),
    },
  }
}

const parseExecutionBody = (execution) => {
  if (!execution || typeof execution !== 'object') {
    return { statusCode: 500, payload: null }
  }

  const statusCode = Number(execution.responseStatusCode || 0)
  const responseBody = normalizeText(execution.responseBody)

  if (!responseBody) {
    return { statusCode, payload: null }
  }

  try {
    return { statusCode, payload: JSON.parse(responseBody) }
  } catch {
    return { statusCode, payload: null }
  }
}

export const syncLeadToCrm = async (wizardPayload, log) => {
  const enabled = parseBoolean(process.env.CRM_SYNC_ENABLED, true)
  if (!enabled) {
    return { synced: false, skipped: true, reason: 'CRM_SYNC_ENABLED=false' }
  }

  const endpoint = normalizeText(process.env.CRM_SYNC_ENDPOINT)
  const projectId = normalizeText(process.env.CRM_SYNC_PROJECT_ID)
  const functionId = normalizeText(process.env.CRM_SYNC_FUNCTION_ID) || 'create-lead'
  const apiKey = normalizeText(process.env.CRM_SYNC_API_KEY)
  const required = parseBoolean(process.env.CRM_SYNC_REQUIRED, true)

  if (!endpoint || !projectId || !functionId) {
    const reason = 'CRM sync variables are missing (CRM_SYNC_ENDPOINT / CRM_SYNC_PROJECT_ID / CRM_SYNC_FUNCTION_ID).'

    if (required) {
      throw new Error(reason)
    }

    return { synced: false, skipped: true, reason }
  }

  const executionEndpoint = `${ensureV1Endpoint(endpoint)}/functions/${functionId}/executions`
  const body = {
    async: false,
    path: '/wizard-crm-sync',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(toCrmLeadPayload(wizardPayload)),
  }

  const headers = {
    'Content-Type': 'application/json',
    'X-Appwrite-Project': projectId,
  }

  if (apiKey) {
    headers['X-Appwrite-Key'] = apiKey
  }

  const response = await fetch(executionEndpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })

  const execution = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(execution?.message || 'CRM sync execution request failed.')
  }

  const { statusCode, payload } = parseExecutionBody(execution)
  if (statusCode >= 400 || payload?.success === false) {
    const detailMessage = normalizeText(payload?.error?.details?.[0]?.message)
    const errorMessage =
      payload?.error?.message || payload?.message || 'CRM create-lead returned an error.'
    const normalized = `${errorMessage} ${detailMessage}`.toLowerCase()
    const looksLikeDuplicate =
      normalized.includes('already exists') ||
      normalized.includes('duplicate') ||
      normalized.includes('unique')

    if (looksLikeDuplicate) {
      if (log) {
        log('CRM sync detected duplicated lead. Continuing without hard failure.')
      }

      return {
        synced: true,
        duplicate: true,
        leadId: null,
      }
    }

    throw new Error(errorMessage)
  }

  const leadId = payload?.data?.leadId || null
  if (log) {
    log(`CRM sync completed. leadId=${leadId || 'unknown'}`)
  }

  return {
    synced: true,
    leadId,
  }
}
