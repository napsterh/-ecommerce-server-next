module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'mysql-homer-admin1205.alwaysdata.net'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'homer-admin1205_ecommerce-next'),
      user: env('DATABASE_USERNAME', '298235_homer'),
      password: env('DATABASE_PASSWORD', 'H7ZLDr5.Rm-p*fz'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
