import {OwnerPageSalesChart} from "./OwnerPageSalesChart";
import {OwnerPageAmountChart} from "./OwnerPageAmountChart";
import axios from "axios";
import {useEffect, useState} from "react";
import './OwnerPageStats.css'

function OwnerPageStats() {
    const [pizzas, setPizzas] = useState([]);
    const [amounts, setAmounts] = useState([]);
    const [sales, setSales] = useState([]);
    const [dayOfTheWeek, setDayOfTheWeek] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/Stats/loadData").then((res) => {
            setPizzas(res.data.pizzaName);
            setAmounts(res.data.amounts);
            setSales(res.data.sales);
            setDayOfTheWeek(res.data.dayOfTheWeek);
        });
    }, []);
    //TODO DB에서 값 조회하여 amounts와 sales 구성

    return (
        <div className="my-page-stats">
            <div className="my-page-stats-container">
                <div className="top-text">
                    메뉴별 판매수량
                </div>
                <div className="chart-area">
                    <OwnerPageAmountChart labels={pizzas} amounts={amounts}></OwnerPageAmountChart>
                </div>

                <div className="top-text">
                    요일별 총 매출
                </div>
                <div className="chart-area">
                    <OwnerPageSalesChart labels={dayOfTheWeek} sales={sales}></OwnerPageSalesChart>
                </div>
            </div>
        </div>
    )
}

export default OwnerPageStats;