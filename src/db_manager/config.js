const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./db/messageDb.db');
db.run('CREATE TABLE IF NOT EXISTS msg(id INTEGER PRIMARY KEY AUTOINCREMENT, messages TEXT NOT NULL, users TEXT NOT NULL)');

module.exports = db;
