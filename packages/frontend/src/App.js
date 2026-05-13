import React from 'react';
import './App.css';
import { useItems } from './hooks/useItems';
import { ItemForm } from './components/ItemForm';
import { ItemList } from './components/ItemList';

/**
 * App component: main container for the TODO app.
 * Uses custom hook for data management and sub-components for UI sections.
 */
function App() {
  const { items, loading, error, addItem, deleteItem, clearError } = useItems();

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do App</h1>
        <p>Keep track of your tasks</p>
      </header>

      <main>
        <ItemForm onSubmit={addItem} />

        <section className="items-section">
          <h2>Items from Database</h2>
          {error && (
            <>
              <p className="error">{error}</p>
              <button onClick={clearError} className="close-error">
                Dismiss
              </button>
            </>
          )}
          <ItemList items={items} loading={loading} onDelete={deleteItem} />
        </section>
      </main>
    </div>
  );
}

export default App;