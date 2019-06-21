import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

document.addEventListener('DOMContentLoaded', () => {
  // console.log("Loaded");
  
  ReactDOM.render(<Clock />, document.getElementById("root"));
});