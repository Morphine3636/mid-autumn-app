import React from 'react';
import ReactDOM from 'react-dom/client';
import Admin from './AdminMidAutumn/index.js';
import Moon from './Moon/index';
import './Assets/global.scss';
import { BrowserRouter } from "react-router-dom";
import R from '@/Utils/Router';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <R/>
  </BrowserRouter>
);
