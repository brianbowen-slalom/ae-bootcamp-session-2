import { useState, useEffect } from 'react';
import { apiGet, apiPost, apiDelete } from '../utils/api-client';

/**
 * Custom hook for managing todo items: fetch, add, and delete.
 * Encapsulates all data logic and state management.
 * @returns {object} { items, loading, error, addItem, deleteItem, clearError }
 */
export function useItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch items on mount
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const result = await apiGet('/api/items');
      setItems(result);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addItem = async (name) => {
    try {
      const result = await apiPost('/api/items', { name });
      setItems([...items, result]);
      setError(null);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deleteItem = async (itemId) => {
    try {
      await apiDelete(`/api/items/${itemId}`);
      setItems(items.filter((item) => item.id !== itemId));
      setError(null);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const clearError = () => setError(null);

  return {
    items,
    loading,
    error,
    addItem,
    deleteItem,
    clearError,
  };
}
