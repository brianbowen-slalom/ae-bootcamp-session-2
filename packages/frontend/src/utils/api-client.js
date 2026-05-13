/**
 * Centralized API client for making HTTP requests.
 * Handles headers, error formatting, and common patterns.
 */

const API_BASE = '';

/**
 * Makes a fetch request with common headers and error handling.
 * @param {string} endpoint - API endpoint (e.g., '/api/items')
 * @param {object} options - Fetch options (method, body, etc.)
 * @returns {Promise<object>} Parsed JSON response
 * @throws {Error} With descriptive message on failure
 */
async function request(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: Failed to fetch ${endpoint}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Failed to fetch ${endpoint}: ${error.message}`);
  }
}

/**
 * GET request helper.
 */
export const apiGet = (endpoint) => request(endpoint, { method: 'GET' });

/**
 * POST request helper.
 */
export const apiPost = (endpoint, body) =>
  request(endpoint, { method: 'POST', body: JSON.stringify(body) });

/**
 * DELETE request helper.
 */
export const apiDelete = (endpoint) => request(endpoint, { method: 'DELETE' });
