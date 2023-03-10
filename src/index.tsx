import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import App from './App';
import firebaseConfig from './firebaseconfig';

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
