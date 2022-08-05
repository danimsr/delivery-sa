import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./assets/css/PageStructure.css"
import "./assets/css/Tabela.css"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes';
import { GlobalStyle } from './globalStyles';
import Sidebar from './components/Sidebar/Sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <GlobalStyle />
      <Sidebar />
        <Routes>
          {routes.map(route => (
            <Route key={route.path}
              path={route.path}
              element={route.element} />
          ))}
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
