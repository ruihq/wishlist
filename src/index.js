// Code for the index.js file, located at src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Wishlist from './components/Wishlist';

ReactDOM.render(
  // Render the Wishlist component
  <React.StrictMode>
    <Wishlist />
  </React.StrictMode>,
  document.getElementById('root')
);
