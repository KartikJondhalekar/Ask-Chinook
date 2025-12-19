import sqlite3 from 'sqlite3';
import fs from 'fs';

const sqlFilePath = 'chinook-sqlite.sql';
const dbName = 'chinook.db';
const db = new sqlite3.Database(dbName);
const sqlScript = fs.readFileSync(sqlFilePath, 'utf8');

db.exec(sqlScript, (err) => {
    if (err) {
        console.error('Error executing SQL script:', err);
    } else {
        console.log('Database created successfully');
    }
    db.close();
});
