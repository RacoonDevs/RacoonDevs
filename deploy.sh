#!/bin/bash
# deploy.sh - Script de despliegue para VPS

set -e  # Salir si hay errores

echo "🚀 Iniciando despliegue de RacoonDevs..."

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para logging
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

error() {
    echo -e "${RED}[ERROR] $1${NC}"
    exit 1
}

warn() {
    echo -e "${YELLOW}[WARNING] $1${NC}"
}

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    error "No se encontró package.json. Ejecuta desde la raíz del proyecto."
fi

# 1. Actualizar código desde Git
log "📥 Actualizando código desde Git..."
git pull origin master || error "Error al actualizar desde Git"

# 2. Instalar dependencias
log "📦 Instalando dependencias..."
npm run install-all || error "Error al instalar dependencias"

# 3. Build del frontend
log "🏗️ Construyendo frontend..."
npm run build:front || error "Error al construir frontend"

# 4. Crear directorio de logs si no existe
log "📁 Creando directorio de logs..."
mkdir -p logs

# 5. Verificar variables de entorno del backend
log "🔍 Verificando configuración del backend..."
if [ ! -f "back/.env" ]; then
    error "No se encontró back/.env. Configura las variables de entorno."
fi

# 6. Reiniciar PM2
log "🔄 Reiniciando servicios con PM2..."
if pm2 list | grep -q "racoondevs-backend"; then
    log "Reiniciando aplicación existente..."
    npm run pm2:restart
else
    log "Iniciando aplicación por primera vez..."
    npm run pm2:start
fi

# 7. Verificar que el backend esté funcionando
log "🩺 Verificando salud del backend..."
sleep 5
if curl -f http://localhost:3001/health > /dev/null 2>&1; then
    log "✅ Backend funcionando correctamente"
else
    error "❌ Backend no responde en /health"
fi

# 8. Mostrar estado de PM2
log "📊 Estado de los procesos:"
pm2 status

# 9. Mostrar logs recientes
log "📋 Últimos logs:"
pm2 logs racoondevs-backend --lines 10

log "🎉 ¡Despliegue completado exitosamente!"
log "🌐 Frontend: Servido por Nginx desde /var/www/racoondevs/front/dist"
log "🔗 Backend: http://localhost:3001"
log "💚 Health check: http://localhost:3001/health"

echo ""
echo "Para monitorear:"
echo "  pm2 monit"
echo "  pm2 logs racoondevs-backend"
echo "  pm2 status"
