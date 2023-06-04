import React, {useState} from "react";
import TitleHeaderLayout from "./info_modify/TitleHeaderLayout";
import ShoppingHeader from "../shopping_basket/ShoppingHeader";
import "../my_page/info_modify/TitleHeaderLayout.css";
import "../my_page/info_modify/InfoModify.css"
//import OrderListTab from "./OrderListTab";

function MyPage() {
    const [visiable, setVisiable] = useState(false);
    const clickBtn = () => {
        setVisiable(!visiable);
    }
    return (
        <div>
            <ShoppingHeader></ShoppingHeader>
            <div className="my-page-inside">
                <div className="my-page-header">마이페이지</div>
                <TitleHeaderLayout></TitleHeaderLayout>
                {/*<OrderListTab clickBtn={clickBtn} visiable={visiable}></OrderListTab>*/}
            </div>
        </div>
    )
}

export default MyPage