import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App'

import { RouterProvider } from 'react-router-dom';
import router from './router';

import 'normalize.css'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ router } future={{ v7_startTransition: true }} />
  </React.StrictMode>
);
