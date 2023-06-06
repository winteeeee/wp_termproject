import "./Order.css"
import {useEffect, useState} from "react";
import axios from 'axios'
import MyMenuList from "./MyMenuList";

function Order() {
    let [pizzaInfo, setPizzaInfo] = useState([])
    const [price, setPrice] = useState(0)
    let [countArray, setCountArray] = useState([])

    useEffect(() => {
        fetchData().then();
    }, []);

    const fetchData = async () => { //TODO 나중에 세션으로 수정해야함.
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
    const submit = () => {
        pizzaInfo.map((pizzaInfo) => {
            axios.post("http://localhost:4000/shoppingBasket/orderInsert", {
                userID: "userID", //session으로 ID로 해주기
                ownerID: "ownerID",
                date: new Date(),
                menu: pizzaInfo.pizzaName,
                price: pizzaInfo.pizzaPrice
            }).then((r) => (console.log(r)));
        })
        //주문하기 누르면 장바구니 전부 삭제.
    }

return (
    <body>
    {
        pizzaInfo.map((pizzaInfo, index) => (
            <MyMenuList index = {index} pizzaInfo={pizzaInfo} setPrice = {setPrice} price = {price} countArray = {countArray} setCountArray = {setCountArray}></MyMenuList>
        ))
    }
    {
        countArray.map((countArray, index) => {
            console.log(index, countArray)
        })
    }
    <div className="total-layout">
        <h4 className="sum-total">합계</h4>
        <h4 className="total">
            총
            <font className="total-price">{price}원</font>
            원
        </h4>
        <div className="basic-button" >주문하기</div>
    </div>
    </body>
)
}

export default Order;