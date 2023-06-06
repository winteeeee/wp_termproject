import ShoppingSubHeader from "./ShoppingSubHeader";
import Order from "./Order";
import HeaderLayout from "../main_page/HeaderLayout";
import React from "react";


function ShoppingBasket() {
    return (
        <div>
            <div className="web-main-tab-header-layout">
                <HeaderLayout/>
            </div>
            <div className="shoppingBasket_page">
                <ShoppingSubHeader/>
                <Order/>
            </div>
        </div>
    )
}
export default ShoppingBasket;