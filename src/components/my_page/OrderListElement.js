import img from "../shopping_basket/img/expert1.png";
import {useEffect, useState} from "react";
import axios from "axios";
import {useCookies} from "react-cookie";

const minusBtnImg = "data:image/svg+xml;base64,PHN2ZyBpZD0iXy0iIGRhdGEtbmFtZT0iLSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2NjYzsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjMwIiBjeT0iMzAiIHI9IjMwIi8+CiAgPHJlY3QgY2xhc3M9ImNscy0yIiB4PSIxOCIgeT0iMjkiIHdpZHRoPSIyNSIgaGVpZ2h0PSIzIi8+Cjwvc3ZnPgo="
const plusBtnImg = "data:image/svg+xml;base64,PHN2ZyBpZD0iXyIgZGF0YS1uYW1lPSIrIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MiIgaGVpZ2h0PSI2MiIgdmlld0JveD0iMCAwIDYyIDYyIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICAgIHN0cm9rZTogIzQxYjZlNjsKICAgICAgICBzdHJva2Utd2lkdGg6IDJweDsKICAgICAgfQoKICAgICAgLmNscy0yLCAuY2xzLTMgewogICAgICAgIGZpbGw6ICM0MWI2ZTY7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjMxIiBjeT0iMzEiIHI9IjMwIi8+CiAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNjI4LDg2N2gyNXYzSDYyOHYtM1ptMTEtMTFoM3YyNWgtM1Y4NTZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjA5IC04MzcpIi8+CiAgPHJlY3QgaWQ9IuyCrOqwge2YlV8yIiBkYXRhLW5hbWU9IuyCrOqwge2YlSAyIiBjbGFzcz0iY2xzLTMiIHg9IjMwIiB5PSIzMCIgd2lkdGg9IjMiIGhlaWdodD0iMyIvPgo8L3N2Zz4K"


function OrderListElement({element}) {
    const [visible, setVisible] = useState(false);
    const [number, setNumber] = useState(1);
    const [opinion, setOpinion] = useState("");
    const [menus, setMenus] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(['loginID']);
    const clickBtn = () => {
        setVisible(!visible);
    }
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

    useEffect(() => {
        let menuName = "";

        element.data.map((e, index) => {
            if (index !== 0) {
                menuName = menuName + ", " + e.menu;
            } else {
                menuName = e.menu;
            }
        })

        setMenus(menuName);
    }, [])

    const submit = () => {
        axios.post("http://localhost:4000/myPage/reviewInsert", {
            name: menus,
            rate: number,
            context: opinion,
            writer: cookies.loginID
        }).then(r => (console.log(r)));

        setOpinion("");
        setVisible(!visible);
    }

    return(
        <div className="myOrder">
            <div className="show">
                <span className="info">주문 일자</span>
                <span className="orderDate">{element.date}</span>
            </div>
            <div className="show">
                <span className="info">주문 메뉴</span>
                <span className="orderMenu">{menus}</span>
            </div>
            <div className="show">
                <span className="info">결제금액</span>
                <span className="orderPrice">{element.totalPrice}원</span>
            </div>
            <div className="show">
                <span className="info">배달지정보</span>
                <span className="orderAddress">{element.dest}</span>
            </div>
            <div className="show">
                <span className="info">주문 매장</span>
                <span className="orderStore">{element.store + "(" + element.storePhoneNumber + ")"}</span>
            </div>
            <div className="ReviewBtn" onClick={clickBtn}>후기 작성</div>
            {visible ? <div className="myReview">
                <div className="myScore">
                    <img src={minusBtnImg} className="minusBtn" onClick={clickMinusBtn}></img>
                    <span className="score">{number}</span>
                    <img src={plusBtnImg} className="plusBtn" onClick={clickPlusBtn}></img>
                </div>
                <h3>리뷰 작성하세요</h3>
                <input className="myOpinion" value={opinion} onChange={(e) => {setOpinion(e.target.value);}}></input>
                <div className="ReviewBtn" onClick={submit}>등록</div>
            </div> : <div/>}
        </div>
    )
}

export default OrderListElement;