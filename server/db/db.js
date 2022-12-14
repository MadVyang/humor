import pg from 'pg';
import db_info from './db_info.js';

const pool = new pg.Pool(db_info);

export const getUser = async (user_id) => {
  const result = await pool.query(`SELECT * FROM user_w_score WHERE id = ${user_id}`);
  return result.rows[0];
};

export const getUsers = async () => {
  const result = await pool.query('SELECT * FROM user_w_score ORDER BY score desc, num_humor desc');
  return result.rows;
};

export const getHumorsByUser = async (user_id) => {
  const result = await pool.query(`SELECT * FROM user_humor WHERE user_id = ${user_id} ORDER BY humor_id`);
  return result.rows;
};

export const postHumor = async (user_id, humor, score, img_path) => {
  const result = await pool.query(`INSERT INTO humor(user_id, content, score, img_path, deleted) VALUES(${user_id}, '${humor}', ${score}, '${img_path}', false)`);
  return result;
};