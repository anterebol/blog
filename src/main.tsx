import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { store } from './store/configReducer';
import { Private } from './hoc/Private/Private';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store()}>
        <Private>
          <App />
        </Private>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
