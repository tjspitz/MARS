import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const mountNode = document.getElementById('app') as Element;
const root = createRoot(mountNode);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
