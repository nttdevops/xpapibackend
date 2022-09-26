module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'hippo-primary.commonapps.svc'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'hippo'),
      user: env('DATABASE_USERNAME', 'hippo'),
      password: env('DATABASE_PASSWORD', 'zhX(k*pC;6nkvQ/(r-HV67c:'),
      //ssl: env.bool('DATABASE_SSL', false),
      ssl: {
        sslmode: 'require',
        rejectUnauthorized: false,
      }
    },
  },
});
