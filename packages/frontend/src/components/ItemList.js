import React from 'react';

/**
 * ItemList component: renders items and handles deletion.
 * Props: items (array), loading (bool), onDelete (callback)
 */
export function ItemList({ items, loading, onDelete }) {
  if (loading) {
    return <p>Loading data...</p>;
  }

  if (items.length === 0) {
    return <p>No items found. Add some!</p>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span>
          <button
            onClick={() => onDelete(item.id)}
            className="delete-btn"
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
