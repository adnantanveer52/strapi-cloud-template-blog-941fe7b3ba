// config/database.js

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'db.ospivhxfyrduvemjnako.supabase.co'), // Host from Supabase
      port: env('DATABASE_PORT', 5432), // Default PostgreSQL port
      database: env('DATABASE_NAME', 'postgres'), // Database name
      user: env('DATABASE_USERNAME', 'postgres'), // Username from Supabase
      password: env('DATABASE_PASSWORD', 'Kamal25808@%*)*'), // Password from Supabase
      ssl: { rejectUnauthorized: false }, // SSL for secure connection (important for Supabase)
    },
    debug: false,
  },
});
