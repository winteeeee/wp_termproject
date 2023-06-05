import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import ShoppingBasket from "./components/shopping_basket/ShoppingBasket";
import {BrowserRouter} from "react-router-dom";
import MyPage from "./components/my_page/MyPage";
import MainPage from "./components/main_page/MainPage";
import MainRoute from "./components/shopping_basket/MainRoute";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoute/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
