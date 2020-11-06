import React from 'react';
import ReactDOM from 'react-dom';
import './assets/app.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// or all tools are exported from the "all" file (excluding bonus plugins):
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
 
// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin); 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
