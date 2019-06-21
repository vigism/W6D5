import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tab from './tabs';

document.addEventListener('DOMContentLoaded', () => {
  // console.log("Loaded");
  let content = [{ title: "Tab 1", content: "Content 1" }, { title: "Tab 2", content: "Content 2" }, { title: "Tab 3", content: "Content 3" }]
  ReactDOM.render(<div><Clock /> <Tab content={content}/></div>, document.getElementById("root"));
  
});