import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(BrowserRouter, null,
    React.createElement(App, null)));
//# sourceMappingURL=index.js.map