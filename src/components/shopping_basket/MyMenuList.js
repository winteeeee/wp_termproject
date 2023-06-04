import img from "./img/expert1.png";
import {useState} from "react";
import pizza from "../pizza/Pizza";

const minusBtnImg = "data:image/svg+xml;base64,PHN2ZyBpZD0iXy0iIGRhdGEtbmFtZT0iLSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2NjYzsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjMwIiBjeT0iMzAiIHI9IjMwIi8+CiAgPHJlY3QgY2xhc3M9ImNscy0yIiB4PSIxOCIgeT0iMjkiIHdpZHRoPSIyNSIgaGVpZ2h0PSIzIi8+Cjwvc3ZnPgo="
const plusBtnImg = "data:image/svg+xml;base64,PHN2ZyBpZD0iXyIgZGF0YS1uYW1lPSIrIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MiIgaGVpZ2h0PSI2MiIgdmlld0JveD0iMCAwIDYyIDYyIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICAgIHN0cm9rZTogIzQxYjZlNjsKICAgICAgICBzdHJva2Utd2lkdGg6IDJweDsKICAgICAgfQoKICAgICAgLmNscy0yLCAuY2xzLTMgewogICAgICAgIGZpbGw6ICM0MWI2ZTY7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjMxIiBjeT0iMzEiIHI9IjMwIi8+CiAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNjI4LDg2N2gyNXYzSDYyOHYtM1ptMTEtMTFoM3YyNWgtM1Y4NTZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjA5IC04MzcpIi8+CiAgPHJlY3QgaWQ9IuyCrOqwge2YlV8yIiBkYXRhLW5hbWU9IuyCrOqwge2YlSAyIiBjbGFzcz0iY2xzLTMiIHg9IjMwIiB5PSIzMCIgd2lkdGg9IjMiIGhlaWdodD0iMyIvPgo8L3N2Zz4K"
const deleteImg = "data:image/svg+xml;base64,PHN2ZyBpZD0i64W47Jej7KeAIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MiIgaGVpZ2h0PSI5MiIgdmlld0JveD0iMCAwIDkyIDkyIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiBub25lOwogICAgICB9CgogICAgICAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgZmlsbDogIzAwMDAwMDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iNDYiIGN5PSI0NiIgcj0iNDYiLz4KICA8cGF0aCBpZD0iYnRuX3giIGNsYXNzPSJjbHMtMiIgZD0iTTI3My4wMTQsNzAxTDI3NSw2OTkuMDEzLDMwMi45ODYsNzI3LDMwMSw3MjguOTg2Wm0yOS45NzIsMEwzMDEsNjk5LjAxMywyNzMuMDE0LDcyNywyNzUsNzI4Ljk4NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNDIgLTY2OCkiLz4KICA8cmVjdCBpZD0i7IKs6rCB7ZiVXzEiIGRhdGEtbmFtZT0i7IKs6rCB7ZiVIDEiIGNsYXNzPSJjbHMtMyIgeD0iNDQiIHk9IjQ0IiB3aWR0aD0iNCIgaGVpZ2h0PSI0Ii8+Cjwvc3ZnPgo="


function MyMenuList({pizzaInfo, setPrice ,price}) {

    const [numberCount, setNumberCount] = useState(1)
    const [totalPrice, setTotalPrice] = useState(pizzaInfo.pizzaPrice)
    const clickMinusBtn = () => {
        if (numberCount > 1 ) {
            setNumberCount(numberCount - 1)
            console.log(totalPrice)
        }
    }

    const clickPlusBtn = () => {
        if (numberCount < 10) {
            setNumberCount(numberCount + 1)
            setPrice(totalPrice * numberCount + price)
            setTotalPrice(totalPrice * numberCount)
            console.log(totalPrice)
        }
    }
    const clickDeleteBtn = () => {
        if(pizzaInfo != null) {
            console.log("삭제");
        }
    }

    return (
        <div className="basket-body-area">
            <div className="body-image-area">
                <img src={`data:${pizzaInfo.pizzaImg.mimetype};base64,${pizzaInfo.pizzaImg.buffer}`}
                     className="basket-item-img"></img>
            </div>
            <div className="body-left-area">
                <div className="h4-black">{pizzaInfo.pizzaName}</div>
                <div>
                    <span className="h6-join-background">{pizzaInfo.pizzaOption}</span>
                </div>
            </div>
            <div className="body-right-area">
                <div className="number-picker-outer">
                    <div className="number-picker">
                        <img src={minusBtnImg} className="minusBtn" onClick={clickMinusBtn}></img>
                        <span className="number_count">{numberCount}</span>
                        <img src={plusBtnImg} className="plusBtn" onClick={clickPlusBtn}></img>
                    </div>
                </div>
            </div>
            <div className="footer-left">
                <div className="btn-option"> 옵션변경</div>
            </div>
            <div className="footer-center">{totalPrice}원</div>
            <div className="footer-right">
                <div className="btn-change" changed="0"> 변경저장</div>
            </div>
            <div className="basket-toolbar-area">
                <img src={deleteImg} alt="장바구니 닫기" className="delete-btn" onClick={clickDeleteBtn}></img>
            </div>
        </div>
    )
}

export default MyMenuList