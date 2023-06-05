import React, {useState} from "react";
import TitleHeaderLayout from "./info_modify/TitleHeaderLayout";
import ShoppingHeader from "../shopping_basket/ShoppingHeader";
import "../my_page/info_modify/TitleHeaderLayout.css";
import "../my_page/info_modify/InfoModify.css"
import OrderListTab from "./OrderListTab";
import {Route, Routes} from "react-router-dom";
import InfoModify from "./info_modify/InfoModify";

function MyPage() {
    return (
        <div>
            <ShoppingHeader></ShoppingHeader>
            <div className="my-page-inside">
                <div className="my-page-header">마이페이지</div>
                <TitleHeaderLayout></TitleHeaderLayout>
                <Routes>
                    <Route path="/myOrder" element={<OrderListTab/>}></Route>
                    <Route path="/myInfo" element={<InfoModify/>}></Route>
                </Routes>
            </div>
        </div>
    )
}

export default MyPage