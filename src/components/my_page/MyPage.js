import React from "react";
import TitleHeaderLayout from "./info_modify/TitleHeaderLayout";
import ShoppingHeader from "../shopping_basket/ShoppingHeader";
import "../my_page/info_modify/TitleHeaderLayout.css";
import "../my_page/info_modify/InfoModify.css"

function MyPage() {
    return (
        <div>
            <ShoppingHeader></ShoppingHeader>
            <div className="my-page-inside">
                <div className="my-page-header">마이페이지</div>
                <TitleHeaderLayout></TitleHeaderLayout>
            </div>
        </div>
    )
}

export default MyPage