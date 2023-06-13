module.exports = {
  apps: [
    {
      name: 'czblog',
      port: '9777',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
