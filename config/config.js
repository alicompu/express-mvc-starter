const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    server: {
      port: process.env.PORT || 3000,
      hostname: process.env.HOSTNAME || 'localhost',
    },
    database: {
      url: `mongodb://${process.env.DB_HOST || 'localhost'}:${process.env.DB_HOST || 27017}/${process.env.DB_NAME}`,
    },
  },
  production: {
    server: {
      port: process.env.PORT || 3200,
      hostname: process.env.HOSTNAME || 'localhost',
    },
    database: {
      url: `mongodb://${process.env.DB_HOST || 'localhost'}:${process.env.DB_HOST || 27017}/${process.env.DB_NAME}`,
    },
  },
};
config[env].isDev = env === 'development';
config[env].isProd = env === 'production';

module.exports = config[env];
