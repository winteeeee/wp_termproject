import "./Order.css"
import {useEffect, useState} from "react";
import axios from 'axios'
import MyMenuList from "./MyMenuList";
import {useCookies} from "react-cookie";
import {Link} from "react-router-dom";

function Order() {
    let [pizzaInfo, setPizzaInfo] = useState([])
    const [price, setPrice] = useState(0)
    const [cookies, setCookie, removeCookie] = useCookies(['loginID']);
    let [countArray, setCountArray] = useState([])

    useEffect(() => {
        fetchData().then();
    }, []);

    const fetchData = async () => {
        try {
            axios.get("http://localhost:4000/shoppingBasket/loadData").then((res) => {
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
        const today = new Date();
        const data = [];
        let totalAmount = 0;
        let totalPrice = 0;

        pizzaInfo.map((e, index) => {
            let curAmount = countArray[index] === undefined ? 1 : countArray[index];
            let curPrice = e.pizzaPrice * curAmount;
            totalAmount += curAmount;
            totalPrice += curPrice;
            data.push({menu: e.pizzaName, price: e.pizzaPrice * curAmount, amount: curAmount})
        });

        axios.post("http://localhost:4000/shoppingBasket/orderInsert", {
            userID: cookies.loginID,
            ownerID: "ownerID",
            date: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}`,
            dayOfTheWeek: `${today.getDay()}`,
            data: data,
            totalAmount: totalAmount,
            totalPrice: totalPrice
        }).then((r) => (console.log(r)));

        axios.get(`http://localhost:4000/shoppingBasket/deleteAll/${cookies.loginID}`).then((r) => {console.log(r)})

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
        <Link to="/">
            <div className="basic-button" onClick={submit}>주문하기</div>
        </Link>
    </div>
    </body>
)
}

export default Order;