import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

async function getTasks() {
  const result = await pool.query('SELECT * FROM tasks');
  return result[0];
  //try chatch//error handling?
}

async function getTask(id) {
  const result = await pool.query(`SELECT * FROM tasks WHERE id = ${id}`);
  return result[0];
}

async function createTask(task) {
  const result = await pool.query(
    `INSERT INTO tasks (name) VALUES ('${task.name}')`
  );
  const id = result[0].insertId;
  return getTask(id);
}

async function deleteTask(id) {
  const result = await pool.query(`DELETE FROM tasks WHERE id = '${id}'`);

  return result;
}

async function patchTask(id, description) {
  const result = await pool.query(
    `UPDATE tasks SET description=${description} WHERE id=${id}`
  );
  return result;
}

// const test = await updateTask('233', '1');
// console.log(test);

export { getTasks, getTask, createTask, deleteTask, patchTask };
