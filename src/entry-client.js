import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';
hydrateRoot(document.getElementById('root'), _jsx(React.StrictMode, { children: _jsx(App, {}) }));
