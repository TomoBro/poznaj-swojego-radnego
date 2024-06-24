import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';
import { supabase } from './supabaseClient';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

window.supabase = supabase;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
