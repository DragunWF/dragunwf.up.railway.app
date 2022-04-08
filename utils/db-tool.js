import "dotenv/config";
import mysql from "mysql";

let databaseConnected = false;
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

try {
  db.connect((err) => {
    if (err) console.error(err);
  });
  databaseConnected = true;
  console.log("Database connected successfully!");
} catch (err) {
  console.error(err);
}

class DatabaseTool {
  static insertPageVisit(pageId) {
    if (databaseConnected) {
      try {
        const sqlQuery = `INSERT INTO visits (page_id, date, hour) VALUES (${pageId}, CURDATE(), CURTIME());`;
        db.query(sqlQuery);
      } catch (err) {
        console.error(err);
      }
    }
  }

  static insertSocialsVisit(linkId) {
    if (databaseConnected) {
      try {
        const sqlQuery = `INSERT INTO link_clicks (name, date, hour) VALUES (${linkId}, CURDATE(), CURTIME());`;
        db.query(sqlQuery);
      } catch (err) {
        console.error(err);
      }
    }
  }
}

export default DatabaseTool;
