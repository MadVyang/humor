import pg from 'pg';
import db_info from './db_info.js';

const pool = new pg.Pool(db_info);

export const getUsers = (req, res) => {
  pool.query('SELECT * FROM public.user', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};