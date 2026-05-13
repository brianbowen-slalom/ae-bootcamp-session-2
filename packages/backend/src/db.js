const Database = require('better-sqlite3');

/**
 * Database initialization and query helpers.
 * Encapsulates all database interactions.
 */

/**
 * Initialize in-memory SQLite database and create schema.
 */
function initializeDatabase() {
  const db = new Database(':memory:');

  db.exec(`
    CREATE TABLE IF NOT EXISTS items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  return db;
}

/**
 * Seed database with initial sample items.
 */
function seedDatabase(db) {
  const initialItems = ['Item 1', 'Item 2', 'Item 3'];
  const insertStmt = db.prepare('INSERT INTO items (name) VALUES (?)');

  initialItems.forEach((item) => {
    insertStmt.run(item);
  });

  console.log('In-memory database initialized with sample data');
}

/**
 * Fetch all items ordered by creation date (newest first).
 */
function getAllItems(db) {
  return db.prepare('SELECT * FROM items ORDER BY created_at DESC').all();
}

/**
 * Create a new item.
 * @returns {object} The newly created item
 */
function createItem(db, name) {
  const insertStmt = db.prepare('INSERT INTO items (name) VALUES (?)');
  const result = insertStmt.run(name);
  const id = result.lastInsertRowid;
  return db.prepare('SELECT * FROM items WHERE id = ?').get(id);
}

/**
 * Delete an item by ID.
 * @returns {number} Number of rows affected (0 or 1)
 */
function deleteItem(db, id) {
  const deleteStmt = db.prepare('DELETE FROM items WHERE id = ?');
  const result = deleteStmt.run(id);
  return result.changes;
}

/**
 * Check if an item exists by ID.
 */
function getItemById(db, id) {
  return db.prepare('SELECT * FROM items WHERE id = ?').get(id);
}

module.exports = {
  initializeDatabase,
  seedDatabase,
  getAllItems,
  createItem,
  deleteItem,
  getItemById,
};
