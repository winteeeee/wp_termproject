import React, {useState} from 'react';
import "./Pizza.css";

import HeaderLayout from "../main_page/HeaderLayout";
import PizzaMenu from "./PizzaMenu";

const PizzaPage = () => {
    const [activeTab, setActiveTab] = useState("전체"); // 중단탭 피자 분류

    return(
        <div>
            <div className="web-main-tab-header-layout">
                <HeaderLayout></HeaderLayout>
            </div>
            <div className="client-main-page">
                <div className="content-body">
                    <div className="md-content-body">
                        <div className="layout-content-scroll">
                            <div className="main-pizza-menu">
                                <div className="pizza-menu">
                                    <div className="pizza-menu-content">
                                        <div className="pc-pizzamenu">
                                            <PizzaTopText/>
                                            <PizzaTab activeTab={activeTab} setActiveTab={setActiveTab}></PizzaTab>
                                            <PizzaMenu activeTab={activeTab}></PizzaMenu>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PizzaPage;

function PizzaTopText() {
    return(
        <div className="pc-pizzamenu-top-text">
            <p className="pizzamenu-top-text-body2">피자</p>
            <p className="pizzamenu-top-text-footer">
                맛있고 건강한 피자! 피자알볼로의
                <font color="#41b6e6"> 다양한 피자를 주문</font>
                해 보세요.
            </p>
        </div>
    );
}

function PizzaTab({activeTab, setActiveTab}) {
    const tabStyle = {
        border: "1px solid rgb(204, 204, 204)"
    }

    const tabList = ["전체", "장인피자", "달인피자", "명품피자"];
    const handleTabClick = (type) => {
        setActiveTab(type);
    }

    return(
        <div className="pc-pizzamenu-depth-tab-area">
            <div className="layout-tab-whole pc-pizzamenu-depth-tab">
                <table className="tab-container-web">
                    <tbody>
                        <tr className="column">
                            {tabList.map((tab, index) => (
                                <td key={index} onClick={() => handleTabClick(tab)} className={`tab-title ${activeTab===tab ? "active" : "default"}`} style={tabStyle}>{tab}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}