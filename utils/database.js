import "dotenv/config";
import mysql from "mysql";

const developmentMode = false;
const db = mysql.createPool({
  connectionLimit: 5,
  aquireTimeout: 10000,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

class Database {
  static insertPageVisit(pageId) {
    if (!pageId) {
      throw new Error("Missing argument!");
    }

    if (!developmentMode) {
      const sqlQuery = `CALL add_page_visit(${pageId})`;
      db.query(sqlQuery, (err, results) => {
        if (err) console.error(err);
      });
    } else console.log(`Dev Mode: Page ID (${pageId}) visited`);
  }

  static insertSocialsVisit(linkId) {
    if (!linkId) {
      throw new Error("Missing argument!");
    }

    if (!developmentMode) {
      const sqlQuery = `CALL add_link_visit(${linkId})`;
      db.query(sqlQuery, (err, results) => {
        if (err) console.error(err);
      });
    } else console.log(`Dev Mode: Social ID (${linkId}) visited`);
  }
}

export default Database;
