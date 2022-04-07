import "dotenv/config";
import mysql from "mysql";

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) console.error(err);
});

class DatabaseTool {
  static insertPageVisit(pageId) {
    try {
      const sqlQuery = `INSERT INTO pages (page_id, date, time) VALUES (${pageId}, );`;
      db.query(sqlQuery);
    } catch (err) {
      console.error(err);
    }
  }

  static insertSocialsVisit(linkId) {
    try {
      const sqlQuery = `INSERT INTO link_clicks (name, date, time) VALUES (${linkId}, );`;
      db.query(sqlQuery);
    } catch (err) {
      console.error(err);
    }
  }
}

export default DatabaseTool;
