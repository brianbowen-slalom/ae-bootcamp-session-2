import React, { useState } from 'react';

/**
 * ItemForm component: renders form for adding new items.
 * Handles input state and submission; calls onSubmit callback.
 */
export function ItemForm({ onSubmit }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;

    try {
      await onSubmit(newItem);
      setNewItem('');
    } catch {
      // Error handling delegated to parent/hook
    }
  };

  return (
    <section className="add-item-section">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter item name"
        />
        <button type="submit">Add Item</button>
      </form>
    </section>
  );
}
