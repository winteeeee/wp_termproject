import {Route, Routes} from "react-router-dom";
import MainPage from "../main_page/MainPage";
import ShoppingBasket from "./ShoppingBasket";
import PizzaPage from "../pizza/Pizza";
import Review from "../review/Review";
import MyPage from "../my_page/MyPage";
import OrderListTab from "../my_page/OrderListTab";
import InfoModify from "../my_page/info_modify/InfoModify";
import React from "react";
import OwnerPage from "../owner_page/OwnerPage";

function MainRoute() { //TODO 마이페이지랑 점주 페이지는 각 버튼 눌렀을 때 따로 주소 이동에 대해서 생가해보자.
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/pizzaPage" element={<PizzaPage/>}/>
            <Route path="/shoppingBasket" element={<ShoppingBasket/>}/>
            <Route path="/review" element={<Review/>}/>
            {/*<Route path="/myPage" element={<MyPage/>}/>*/}
            {/*<Route path="/ownerPage" element={<OwnerPage/>}/>*/}
        </Routes>
    )
}
export default MainRoute