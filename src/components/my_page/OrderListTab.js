import {Link} from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import OrderListData from "./OrderListData";
import "./OrderListTab.css"
import img from "../shopping_basket/img/expert1.png";

const minusBtnImg = "data:image/svg+xml;base64,PHN2ZyBpZD0iXy0iIGRhdGEtbmFtZT0iLSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2NjYzsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjMwIiBjeT0iMzAiIHI9IjMwIi8+CiAgPHJlY3QgY2xhc3M9ImNscy0yIiB4PSIxOCIgeT0iMjkiIHdpZHRoPSIyNSIgaGVpZ2h0PSIzIi8+Cjwvc3ZnPgo="
const plusBtnImg = "data:image/svg+xml;base64,PHN2ZyBpZD0iXyIgZGF0YS1uYW1lPSIrIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MiIgaGVpZ2h0PSI2MiIgdmlld0JveD0iMCAwIDYyIDYyIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICAgIHN0cm9rZTogIzQxYjZlNjsKICAgICAgICBzdHJva2Utd2lkdGg6IDJweDsKICAgICAgfQoKICAgICAgLmNscy0yLCAuY2xzLTMgewogICAgICAgIGZpbGw6ICM0MWI2ZTY7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjMxIiBjeT0iMzEiIHI9IjMwIi8+CiAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNjI4LDg2N2gyNXYzSDYyOHYtM1ptMTEtMTFoM3YyNWgtM1Y4NTZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjA5IC04MzcpIi8+CiAgPHJlY3QgaWQ9IuyCrOqwge2YlV8yIiBkYXRhLW5hbWU9IuyCrOqwge2YlSAyIiBjbGFzcz0iY2xzLTMiIHg9IjMwIiB5PSIzMCIgd2lkdGg9IjMiIGhlaWdodD0iMyIvPgo8L3N2Zz4K"

function OrderListTab({clickBtn, visiable}) {
    console.log(clickBtn)
    console.log(visiable)
    // let [myOrderList, setMyOrderList] = useState([]);
    const [number, setNumber] = useState(1);
    let testArray = []
    testArray = OrderListData

    const clickPlusBtn = () => {
        if(number < 5) {
            setNumber(number+ 1);
        }
    }
    const clickMinusBtn = () => {
        if(number > 1) {
            setNumber(number- 1);
        }
    }

    // const fetchData = async () => {
    //     try {
    //         axios.get("http://localhost:4000/myOrderList/test").then((res) => {
    //                 setMyOrderList(res.data) //받은 주문내역 객체 배열로 저장
    //         });
    //     }catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // }

    //DB에서 받아올 때는 testArray 말고 OrderList로 하면 됨
    return (
        <div className="orderList">
            {testArray.map((testArray, index) => {
                return (
                    <div className="myOrder">
                        <div className="show">
                            <span className="info">주문 일자</span>
                            <span className="orderDate">{testArray.orderDate}</span>
                        </div>
                        <div className="show">
                            <span className="info">주문 메뉴</span>
                            <span className="orderMenu">{testArray.orderMenu}</span>
                        </div>
                        <div className="show">
                            <span className="info">결제금액</span>
                            <span className="orderPrice">{testArray.price}원</span>
                        </div>
                        <div className="show">
                            <span className="info">배달지정보</span>
                            <span className="orderAddress">{testArray.address}</span>
                        </div>
                        <div className="show">
                            <span className="info">주문 매장</span>
                            <span className="orderStore">{testArray.store}</span>
                        </div>
                        <div className="ReviewBtn" onClick={clickBtn}>후기 작성</div>
                        {visiable ? <div className="myReview">
                            <div className="myScore">
                                <img src={minusBtnImg} className="minusBtn" onClick={clickMinusBtn}></img>
                                <span className="score">{number}</span>
                                <img src={plusBtnImg} className="plusBtn" onClick={clickPlusBtn}></img>
                            </div>
                            <h3>리뷰 작성하세요</h3>
                            <input className="myOpinion"></input>
                            <div className="ReviewBtn">등록</div>
                        </div> : <div/>}
                    </div>
                )
            })}
        </div>
    );
}


export default OrderListTab;