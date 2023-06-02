import OrderListTab from "./OrderListTab";
import React from "react";
import MyPageHeader from "./MyPageHeader";
import "./MyPage.css"
function MyPage () {
    return (
        <div className="My_page">
            <div className="My_page_top">
                <MyPageHeader></MyPageHeader>
                <OrderListTab></OrderListTab>
            </div>
        </div>
)
}
export default MyPage