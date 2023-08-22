// Create a new SQLite database or connect to an existing one
const db = new sqlite3.Database('./tasks.db');
export default db;
