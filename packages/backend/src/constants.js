/**
 * Application constants: HTTP status codes, error messages, database queries.
 */

const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};

const ERROR_MESSAGES = {
  ITEM_NAME_REQUIRED: 'Item name is required',
  VALID_ID_REQUIRED: 'Valid item ID is required',
  ITEM_NOT_FOUND: 'Item not found',
  FAILED_FETCH_ITEMS: 'Failed to fetch items',
  FAILED_CREATE_ITEM: 'Failed to create item',
  FAILED_DELETE_ITEM: 'Failed to delete item',
};

const SUCCESS_MESSAGES = {
  ITEM_DELETED: 'Item deleted successfully',
};

module.exports = {
  HTTP_STATUS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
};
