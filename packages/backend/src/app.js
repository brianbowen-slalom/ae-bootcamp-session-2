const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const {
  initializeDatabase,
  seedDatabase,
  getAllItems,
  createItem,
  deleteItem,
  getItemById,
} = require('./db');
const {
  HTTP_STATUS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
} = require('./constants');

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Initialize database
const db = initializeDatabase();
seedDatabase(db);

/**
 * Health check endpoint
 */
app.get('/', (req, res) => {
  res.status(HTTP_STATUS.OK).json({
    status: 'ok',
    message: 'Backend server is running',
  });
});

/**
 * GET /api/items
 * Retrieve all items from the database
 */
app.get('/api/items', (req, res) => {
  try {
    const items = getAllItems(db);
    res.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res
      .status(HTTP_STATUS.SERVER_ERROR)
      .json({ error: ERROR_MESSAGES.FAILED_FETCH_ITEMS });
  }
});

/**
 * POST /api/items
 * Create a new item with validation
 */
app.post('/api/items', (req, res) => {
  try {
    const { name } = req.body;

    if (!name || typeof name !== 'string' || name.trim() === '') {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        error: ERROR_MESSAGES.ITEM_NAME_REQUIRED,
      });
    }

    const newItem = createItem(db, name);
    res.status(HTTP_STATUS.CREATED).json(newItem);
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(HTTP_STATUS.SERVER_ERROR).json({
      error: ERROR_MESSAGES.FAILED_CREATE_ITEM,
    });
  }
});

/**
 * DELETE /api/items/:id
 * Delete an item by ID with validation
 */
app.delete('/api/items/:id', (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(parseInt(id))) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({
        error: ERROR_MESSAGES.VALID_ID_REQUIRED,
      });
    }

    if (!getItemById(db, id)) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({
        error: ERROR_MESSAGES.ITEM_NOT_FOUND,
      });
    }

    deleteItem(db, id);
    res.json({
      message: SUCCESS_MESSAGES.ITEM_DELETED,
      id: parseInt(id),
    });
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(HTTP_STATUS.SERVER_ERROR).json({
      error: ERROR_MESSAGES.FAILED_DELETE_ITEM,
    });
  }
});

module.exports = { app, db };