import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.sass';
import App from './App';
import './Styles/Displays.sass'
import './Styles/Fonts.sass'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

