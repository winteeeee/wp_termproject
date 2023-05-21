import {OwnerPageSalesChart} from "./OwnerPageSalesChart";
import {OwnerPageAmountChart} from "./OwnerPageAmountChart";

function OwnerPageStats() {
    return (
        <div className="my-page-stats">
            <div className="my-page-stats-container">
                <div className="top-text">
                    메뉴별 판매수량
                </div>
                <OwnerPageAmountChart></OwnerPageAmountChart>

                <div className="top-text">
                    요일별 총 매출
                </div>
                <OwnerPageSalesChart></OwnerPageSalesChart>
            </div>
        </div>
    )
}

export default OwnerPageStats;