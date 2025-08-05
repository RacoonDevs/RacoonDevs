// ecosystem.config.js - Configuración PM2 para producción
module.exports = {
  apps: [
    {
      name: 'racoondevs-backend',
      script: './back/server.js',
      cwd: './',
      instances: 'max', // Usar todos los cores disponibles
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'development',
        PORT: 3001
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      // Logs
      log_file: './logs/app.log',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      
      // Reinicio automático
      watch: false, // No usar en producción
      max_memory_restart: '1G',
      
      // Configuración de cluster
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000,
      
      // Variables de entorno específicas
      env_file: './back/.env'
    }
  ],

  deploy: {
    production: {
      user: 'node',
      host: 'tu-servidor.com',
      ref: 'origin/master',
      repo: 'git@github.com:RacoonDevs/racoondevs.git',
      path: '/var/www/racoondevs',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build:front && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
