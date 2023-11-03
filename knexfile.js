// Update with your config settings.
require('dotenv').config({ path: './.env.local' });

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql', // PostgreSQLを指定
    connection: {
      database: process.env.DEVELOPMENT_DB,
      user:     process.env.DEVELOPMENT_USER,
      password: process.env.DEVELOPMENT_PASSWORD,
      host:     process.env.DEVELOPMENT_HOST,
      port:     process.env.DEVELOPMENT_PORT
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },

  staging: {
    client: 'postgresql', // PostgreSQLを指定
    connection: {
      database: process.env.STAGING_DB,
      user:     process.env.STAGING_USER,
      password: process.env.STAGING_PASSWORD,
      host:     process.env.STAGING_HOST,
      port:     process.env.STAGING_PORT
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/staging'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      connectionString:process.env.DATABASE_URL, // Herokuが提供する環境変数を使用
    ssl: { rejectUnauthorized: false }},
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};
