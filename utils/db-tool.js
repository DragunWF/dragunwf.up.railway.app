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

// My timezone is GMT+8. MySQL by default uses UTC time when outputing CURTIME() or CURDATE()
const myTime = 'ADDTIME(CURTIME(), "08:00")';
const myDate = 'ADDTIME(NOW(), "08:00")';

class DatabaseTool {
  static insertPageVisit(pageId) {
    if (databaseConnected) {
      try {
        const sqlQuery = `INSERT INTO visits (page_id, date, hour) VALUES (${pageId}, ${myDate}, ${myTime});`;
        db.query(sqlQuery);
      } catch (err) {
        console.error(err);
      }
    }
  }

  static insertSocialsVisit(linkId) {
    if (databaseConnected) {
      try {
        const sqlQuery = `INSERT INTO link_clicks (name, date, hour) VALUES (${linkId}, ${myDate}, ${myTime});`;
        db.query(sqlQuery);
      } catch (err) {
        console.error(err);
      }
    }
  }
}

export default DatabaseTool;
