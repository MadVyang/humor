import pg from 'pg';
import db_info from './db_info.js';

const pool = new pg.Pool(db_info);

export const getUser = async (user_id) => {
  const result = await pool.query(`SELECT * FROM public.user WHERE id = ${user_id}`);
  return result.rows[0];
};

export const getUsers = async () => {
  const result = await pool.query('SELECT * FROM public.user');
  return result.rows;
};

export const getHumorsByUser = async (user_id) => {
  const result = await pool.query(`SELECT * FROM user_humor WHERE user_id = ${user_id}`);
  return result.rows;
};

export const postHumor = async (user_id, humor, score) => {
  const result = await pool.query(`INSERT INTO humor(user_id, content, score) VALUES(${user_id}, '${humor}', ${score})`);
  return result;
};