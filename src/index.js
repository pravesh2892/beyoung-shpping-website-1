import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import dataStore from './Store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {dataStore()}>
    <App />
    </Provider>
  </React.StrictMode>
);

