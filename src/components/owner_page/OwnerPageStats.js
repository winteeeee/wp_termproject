import {OwnerPageSalesChart} from "./OwnerPageSalesChart";
import {OwnerPageAmountChart} from "./OwnerPageAmountChart";

function OwnerPageStats() {
    const pizzas = ['쉬림프&핫치킨골드피자', '날개피자', '어깨피자', '꿈을피자', '팔도피자', '웃음꽃피자', '전주불백피자', '팔자피자'];
    const amounts = [30, 10, 15, 25, 20, 10, 20, 30];
    const dayOfTheWeek = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
    const sales = [250000, 230000, 280000, 200000, 390000, 410000, 380000];
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