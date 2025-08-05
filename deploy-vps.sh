#!/bin/bash
# deploy-vps.sh - Script de despliegue para VPS con Nginx

set -e

# Configuración
PROJECT_DIR="/var/www/racoondevs"
NGINX_CONFIG="/etc/nginx/sites-available/racoondevs.com"
DOMAIN="racoondevs.com"

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

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

info() {
    echo -e "${BLUE}[INFO] $1${NC}"
}

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    error "No se encontró package.json. Ejecuta desde la raíz del proyecto."
fi

log "🚀 Iniciando despliegue de RacoonDevs en VPS..."

# 1. Verificar dependencias del sistema
log "🔍 Verificando dependencias del sistema..."
command -v node >/dev/null 2>&1 || error "Node.js no está instalado"
command -v npm >/dev/null 2>&1 || error "npm no está instalado"
command -v nginx >/dev/null 2>&1 || error "Nginx no está instalado"
command -v pm2 >/dev/null 2>&1 || warn "PM2 no está instalado. Instálalo con: npm install -g pm2"

# 2. Crear directorio del proyecto si no existe
log "📁 Preparando directorio del proyecto..."
sudo mkdir -p $PROJECT_DIR
sudo chown -R $USER:$USER $PROJECT_DIR

# 3. Hacer backup del sitio actual (si existe)
if [ -d "$PROJECT_DIR/front/dist" ]; then
    log "💾 Creando backup del sitio actual..."
    sudo cp -r $PROJECT_DIR/front/dist $PROJECT_DIR/dist_backup_$(date +%Y%m%d_%H%M%S)
fi

# 4. Actualizar código
log "📥 Actualizando código..."
if [ -d "$PROJECT_DIR/.git" ]; then
    cd $PROJECT_DIR
    git pull origin master
else
    warn "No hay repositorio Git. Copiando archivos manualmente..."
    sudo cp -r . $PROJECT_DIR/
fi

cd $PROJECT_DIR

# 5. Instalar dependencias
log "📦 Instalando dependencias..."
npm run install-all

# 6. Build del frontend
log "🏗️ Construyendo frontend..."
npm run build:front

# 7. Verificar que el build fue exitoso
if [ ! -d "front/dist" ]; then
    error "El build del frontend falló. No se encontró front/dist"
fi

log "✅ Build del frontend completado"

# 8. Configurar variables de entorno del backend (si no existen)
if [ ! -f "back/.env" ]; then
    warn "No se encontró back/.env. Creando archivo de ejemplo..."
    cp back/.env.example back/.env 2>/dev/null || echo "Configura back/.env manualmente"
fi

# 9. Crear directorio de logs
mkdir -p logs

# 10. Gestionar PM2
log "🔄 Gestionando proceso del backend con PM2..."
if pm2 list | grep -q "racoondevs-backend"; then
    log "Reiniciando aplicación existente..."
    pm2 restart racoondevs-backend
else
    log "Iniciando aplicación por primera vez..."
    pm2 start ecosystem.config.js --env production
fi

# 11. Configurar Nginx
log "🌐 Configurando Nginx..."
if [ ! -f "$NGINX_CONFIG" ]; then
    log "Creando configuración de Nginx..."
    sudo cp nginx.conf $NGINX_CONFIG
    
    # Habilitar sitio
    sudo ln -sf $NGINX_CONFIG /etc/nginx/sites-enabled/
    
    # Verificar configuración
    sudo nginx -t || error "Error en la configuración de Nginx"
    
    # Recargar Nginx
    sudo systemctl reload nginx
    
    log "✅ Nginx configurado correctamente"
else
    log "Configuración de Nginx ya existe. Recargando..."
    sudo systemctl reload nginx
fi

# 12. Verificar SSL (opcional)
log "🔒 Verificando certificado SSL..."
if [ ! -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
    warn "No se encontró certificado SSL. Para configurarlo ejecuta:"
    info "sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN"
else
    log "✅ Certificado SSL encontrado"
fi

# 13. Verificar que todo funcione
log "🩺 Verificando servicios..."

# Backend
sleep 5
if curl -f http://localhost:3001/health > /dev/null 2>&1; then
    log "✅ Backend funcionando correctamente"
else
    error "❌ Backend no responde en puerto 3001"
fi

# Frontend
if [ -f "front/dist/index.html" ]; then
    log "✅ Frontend construido correctamente"
else
    error "❌ No se encontró front/dist/index.html"
fi

# Nginx
if sudo nginx -t > /dev/null 2>&1; then
    log "✅ Nginx configurado correctamente"
else
    error "❌ Error en configuración de Nginx"
fi

# 14. Mostrar estado final
log "📊 Estado de los servicios:"
echo ""
pm2 status
echo ""
sudo systemctl status nginx --no-pager -l

# 15. Configurar PM2 para inicio automático
log "⚙️ Configurando PM2 para inicio automático..."
pm2 save
pm2 startup | grep "sudo" | bash || warn "No se pudo configurar startup automático de PM2"

log "🎉 ¡Despliegue completado exitosamente!"
echo ""
echo "📋 Resumen:"
echo "  🌐 Sitio web: https://$DOMAIN"
echo "  🔗 API: https://$DOMAIN/api/"
echo "  💚 Health check: https://$DOMAIN/health"
echo "  📁 Archivos: $PROJECT_DIR"
echo ""
echo "📱 Comandos útiles:"
echo "  pm2 status                    # Estado de procesos"
echo "  pm2 logs racoondevs-backend   # Ver logs"
echo "  pm2 monit                     # Monitor en tiempo real"
echo "  sudo nginx -t                 # Verificar config Nginx"
echo "  sudo systemctl reload nginx   # Recargar Nginx"
