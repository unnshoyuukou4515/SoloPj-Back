// Update with your config settings.
require('dotenv').config({ path: './.env.local' });

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg', // PostgreSQLを指定
    connection: {
      database: "solo1",
      user:     process.env.DEVELOPMENT_USER||"postgres",
      password: process.env.DEVELOPMENT_PASSWORD||"4515",
      host:     process.env.DEVELOPMENT_HOST||"127.0.0.1",
      port:     process.env.DEVELOPMENT_PORT||"5432"
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },

  staging: {
    client: 'pg', // PostgreSQLを指定
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
      directory: __dirname + '/db/seeds/developent'
    }
  },

  production: {
    client: 'pg',
    connection: {
      connectionString:process.env.DATABASE_URL, 
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
