import {Route, Routes} from "react-router-dom";
import ShoppingHeader from "./ShoppingHeader";
import ShoppingSubHeader from "./ShoppingSubHeader";
import Order from "./Order";


function ShoppingBasket() {
    return (
        <div className="shoppingBasket_page">
            <ShoppingHeader></ShoppingHeader>
            <ShoppingSubHeader></ShoppingSubHeader>
            <Order></Order>

            <Routes>
                <Route path = "/shoppingBasket" elment = {<ShoppingHeader></ShoppingHeader>}></Route>
                <Route path = "/shoppingBasket" elment = {<ShoppingSubHeader></ShoppingSubHeader>}></Route>
                <Route path = "/shoppingBasket" elment = {<Order></Order>}></Route>
            </Routes>
        </div>

    )
}

export default ShoppingBasket;