import React, {useState} from "react";
import TitleHeaderLayout from "./info_modify/TitleHeaderLayout";
import "../my_page/info_modify/TitleHeaderLayout.css";
import "../my_page/info_modify/InfoModify.css"
import OrderListTab from "./OrderListTab";
import {Link, Route, Routes} from "react-router-dom";
import InfoModify from "./info_modify/InfoModify";
import HeaderLayout from "../main_page/HeaderLayout";

function MyPage() {
    return (
        <div>
            <div className="web-main-tab-header-layout">
                <HeaderLayout/>
            </div>
            <div className="my-page-inside">
                <div className="my-page-header">마이페이지</div>
                <TitleHeaderLayout/>
                <Routes>
                    <Route path="/myOrder" element={<OrderListTab/>}/>
                    <Route path="/myInfo" element={<InfoModify/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default MyPage