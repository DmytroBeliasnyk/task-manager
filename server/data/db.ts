import {Pool} from "pg";
import dotenv from "dotenv";

dotenv.config();

export const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "task_manager",
  password: process.env.DB_PASSWORD,
  port: 5432,
});

(async () => {
  try {
    await db.query(`
        CREATE TABLE IF NOT EXISTS lists
        (
            id          TEXT PRIMARY KEY,
            title       TEXT NOT NULL,
            description TEXT
        );`
    )

    await db.query(`
        CREATE TABLE IF NOT EXISTS tasks
        (
            id          TEXT PRIMARY KEY,
            title       TEXT NOT NULL,
            description TEXT,
            list_id     TEXT REFERENCES lists (id)
        );`
    )
  } catch (err) {
    console.log(err)
  } finally {
    await db.end();
  }
})()