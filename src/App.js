import {BrowserRouter, Route, Routes} from "react-router-dom";
import MyPage from "./components/my_page/MyPage";
import React from "react";
import MainPage from './components/main_page/MainPage';
import OwnerPage from "./components/owner_page/OwnerPage";
import ShoppingBasket from "./components/shopping_basket/ShoppingBasket";
import Review from './components/review/Review';

import './index.css';
import './fonts/Font.css';
import Pizza from "./components/pizza/Pizza";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/pizzaPage/*" element={<Pizza/>}/>
          <Route path="/myPage/*" element={<MyPage/>}/>
          <Route path="/ownerPage/*" element={<OwnerPage/>}/>
          <Route path="/review/*" element={<Review/>}/>
          <Route path="/shoppingBasket/*" element={<ShoppingBasket/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
