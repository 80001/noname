import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';
import { BlogProvider } from './context/BlogContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <BlogProvider>
          <App />
        </BlogProvider>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>
);
