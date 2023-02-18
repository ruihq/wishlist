// Code for the Wishlist component, located at src/components/Wishlist.js
import React, { useState } from 'react';

function Wishlist() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <h1>My Wishlist in React!</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => {
        e.preventDefault();
        addItem(e.target.item.value);
        e.target.item.value = '';
      }}>
        <input name="item" type="text" placeholder="Add item to wishlist" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Wishlist;
