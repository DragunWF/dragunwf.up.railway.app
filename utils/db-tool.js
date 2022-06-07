import "dotenv/config";
import mysql from "mysql";

const db = mysql.createPool({
  connectionLimit: 5,
  aquireTimeout: 10000,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// My timezone is GMT+8. MySQL by default uses UTC time when outputing CURTIME() or CURDATE()
// I won't be using these constant variables right now
const myTime = 'ADDTIME(CURTIME(), "08:00")';
const myDate = 'ADDTIME(NOW(), "08:00")';

class DatabaseTool {
  static insertPageVisit(pageId) {
    const sqlQuery = `INSERT INTO visits (page_id, date, hour) VALUES (${pageId}, CURTIME(), NOW());`;
    db.query(sqlQuery, (err, results) => {
      if (err) console.error(err);
    });
  }

  static insertSocialsVisit(linkId) {
    const sqlQuery = `INSERT INTO link_clicks (link_id, date, hour) VALUES (${linkId}, CURTIME(), NOW());`;
    db.query(sqlQuery, (err, results) => {
      if (err) console.error(err);
    });
  }
}

export default DatabaseTool;
