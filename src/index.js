import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './Route/Route';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { storeReducer } from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Provider store={storeReducer} >
          <RouterProvider router={router} />
        </Provider>
  </React.StrictMode>
);


