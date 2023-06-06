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
        pizzaInfo.map(e => {
            data.push({menu: e.pizzaName, price: e.pizzaPrice})
        });
        console.log(data);

        // axios.post("http://localhost:4000/shoppingBasket/orderInsert", {
        //     userID: cookies.loginID,
        //     ownerID: "ownerID",
        //     date: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}`,
        //     menu: pizzaInfo.map(e => e.pizzaName),
        //     totalPrice: pizzaInfo.pizzaPrice
        // }).then((r) => (console.log(r)));

        axios.get(`http://localhost:4000/shoppingBasket/deleteAll/${cookies.loginID}`).then((r) => {console.log(r)})
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
        <Link to="/">
            <div className="basic-button" onClick={submit}>주문하기</div>
        </Link>
    </div>
    </body>
)
}

export default Order;