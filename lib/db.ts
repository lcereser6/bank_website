// lib/db.ts
import { Pool } from 'pg';

const pool = new Pool({
  user: 'ubuntu',
  host: 'localhost',
  database: 'testdb',
  password: 'ubuntu',
  port: 5432,
});

export const query = (text: string, params: any[]) => pool.query(text, params);
