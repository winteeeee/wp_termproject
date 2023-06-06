import axios from "axios";
import {useEffect, useState} from "react";
import "./OrderListTab.css"
import OrderListElement from "./OrderListElement";
import {useCookies} from "react-cookie";

function OrderListTab() {
    const [myOrderList, setMyOrderList] = useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(['loginID']);

    useEffect(() => {
        axios.get(`http://localhost:4000/myPage/loadOrderHistory/${cookies.loginID}`).then((r) => {
            setMyOrderList(r.data);
        });
    }, []);

    return (
        <div className="orderList">
            {myOrderList.map((element) => {
                return (<OrderListElement element={element}/>)
            })}
        </div>
    );
}

export default OrderListTab;