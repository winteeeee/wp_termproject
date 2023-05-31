import {Route, Routes} from "react-router-dom";
import ShoppingHeader from "./ShoppingHeader";
import ShoppingSubHeader from "./ShoppingSubHeader";
import OrderList from "./OrderList";


function ShoppingBasket() {
    return (
        <div className="shoppingBasket_page">
            <ShoppingHeader></ShoppingHeader>
            <ShoppingSubHeader></ShoppingSubHeader>
            <OrderList></OrderList>
        </div>
    )
}

export default ShoppingBasket;