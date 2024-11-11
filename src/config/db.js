import Pool from "pg-pool";
import dotenv from 'dotenv';
dotenv.config(); 

console.log(process.env.DB_USER);

const postgresPool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000
});

// Test the database connection
postgresPool.connect((err, client, release) => {
  if (err) {
    console.error('Database connection error:', err.stack);
  } else {
    console.log('Database connected successfully.');
    release(); // Release the client back to the pool
  }
});

export default postgresPool;
