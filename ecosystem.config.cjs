module.exports = {
  apps: [
    {
      name: 'sera-bot',
      script: './dist/index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      stop_exit_codes: [0], // 0으로 종료되면 재시작하지 않음 (종료), 그 외에는 재시작
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      // Restart on crash (exit code 1) is default behavior for PM2
      exp_backoff_restart_delay: 100, // Delay between restarts
    },
  ],
};
