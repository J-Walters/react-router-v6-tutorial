import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';
import Invoice from './routes/invoice'
//connects app to the browser's URL (Browser Router)
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    {/* route configuration */}
    <Routes>
      <Route path="/" element={<App />}>
        {/* when routes have children */}
        {/* 1. nests URL ('/' + "expenses") */}
        {/* 2. nest the UI components for shared layout when the child route matches */}
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} >
          {/* index prop shares the path of the parent (doesn't have it's own path) */}
          <Route index element={<main style={{ padding: '1rem' }}>
            <p>Select an invoice</p>
          </main>} />
          {/* can match any value as long as the pattern is the same 'URL param' */}
          <Route path=':invoiceId' element={<Invoice />} />
        </Route>
        {/* '*' will match only when no other routes do */}
        <Route path='*'
          element={
            <main style={{ padding: '1rem' }} >
              <p>There's nothing here</p>
            </main>
          } />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
