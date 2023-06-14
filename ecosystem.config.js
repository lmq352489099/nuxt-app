module.exports = {
  apps: [
    {
      name: 'czblog',
      port: '9777',
      // exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env: {
        DATABASE_URL: 'mysql://root:rootpassword@localhost:3306/ycxt'
      },
    },
  ],
}
