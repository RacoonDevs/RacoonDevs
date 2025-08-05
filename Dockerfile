# Dockerfile para Backend
FROM node:18-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json del backend
COPY back/package*.json ./

# Instalar dependencias
RUN npm ci --only=production

# Copiar código del backend
COPY back/ ./

# Crear usuario no-root
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Cambiar propiedad de archivos
RUN chown -R nextjs:nodejs /app
USER nextjs

# Exponer puerto
EXPOSE 3001

# Variables de entorno
ENV NODE_ENV=production
ENV PORT=3001

# Comando de inicio
CMD ["node", "server.js"]
