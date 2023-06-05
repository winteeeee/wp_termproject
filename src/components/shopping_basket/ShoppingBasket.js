import ShoppingHeader from "./ShoppingHeader";
import ShoppingSubHeader from "./ShoppingSubHeader";
import Order from "./Order";



function ShoppingBasket() {
    return (
        <div className="shoppingBasket_page">
            <ShoppingHeader/>
            <ShoppingSubHeader/>
            <Order/>
        </div>

    )
}

export default ShoppingBasket;