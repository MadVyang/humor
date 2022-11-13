import pg from 'pg';
import db_info from './db_info.js';

const pool = new pg.Pool(db_info);

export const getUsers = async () => {
  const result = await pool.query('SELECT * FROM public.user');
  return result.rows;
};

export const getHumorsByUser = async (user_id) => {
  console.log(`SELECT * FROM user_humor WHERE user_id = ${user_id}`);
  const result = await pool.query(`SELECT * FROM user_humor WHERE user_id = ${user_id}`);
  return result.rows;
};