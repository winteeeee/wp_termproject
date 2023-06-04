import "./Order.css"
import {useEffect, useState} from "react";
import axios from 'axios'
import MyMenuList from "./MyMenuList";

function Order() {
    let [pizzaInfo, setPizzaInfo] = useState([])
    const [price, setPrice] = useState(0)

    useEffect(() => {
        fetchData().then();
    }, []);

    const fetchData = async () => {
        try {
            axios.get("http://localhost:4000/shoppingBasket/test").then((res) => {
                setPizzaInfo(res.data)

                let totalPrice = 0;
                res.data.forEach((e) => {
                    totalPrice += Number(e.pizzaPrice);
                })

                setPrice(totalPrice)
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

return (
    <body>
    {
        pizzaInfo.map((pizzaInfo) => (
            <MyMenuList pizzaInfo={pizzaInfo} setPrice = {setPrice} price = {price}></MyMenuList>
        ))
    }
    <div className="total-layout">
        <h4 className="sum-total">합계</h4>
        <h4 className="total">
            총
            <font className="total-price">{price}원</font>
            원
        </h4>
        <div className="basic-button">주문하기</div>
    </div>
    </body>
)
}

export default Order;