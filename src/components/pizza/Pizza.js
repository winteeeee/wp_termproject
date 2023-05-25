import React, {useState, useEffect} from 'react';
import "./Pizza.css";

import pizzaData from './PizzaData.js';

import icon_view from "./img/icon-view.png";
import icon_basket from "./img/icon-basket.png";

const PizzaPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    return(
        <div>
            <div className="main-pizza-menu">
                <div className="pizza-menu">
                    <div className="pizza-menu-content">
                        <div className="pc-pizzamenu">
                            <PizzaTopText></PizzaTopText>
                            <PizzaTab activeTab={activeTab} setActiveTab={setActiveTab}></PizzaTab>
                            <PizzaMenu activeTab={activeTab}></PizzaMenu>
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
    const handleTabClick = (index) => {
        setActiveTab(index);
    }

    return(
        <div className="pc-pizzamenu-depth-tab-area">
            <div className="layout-tab-whole pc-pizzamenu-depth-tab">
                <table className="tab-container-web">
                    <tbody>
                        <tr className="column">
                            {tabList.map((tab, index) => (
                                <td key={index} onClick={() => handleTabClick(index)} className={`tab-title ${activeTab===index ? "active" : "default"}`} style={tabStyle}>{tab}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function PizzaMenu({activeTab}) {
    const pageNum = Math.floor((pizzaData.length + 1) / 2);

    const [selected, setSelected] = useState("2");
    const handleSelectChange = (event) => {
        setSelected(event.target.value);
    }
    useEffect(() => {
        if(activeTab !== 0) {
            setSelected("2");
        }
    }, [activeTab]);

    const selectClassName = (activeTab !== 0 ? "alvolo-select-disable" : "alvolo-select-noline");

    return(
        <div className="pc-pizzamenu-menu">
            <div className="pizzamenu-text-area">
                <div className="pizzamenu-allergie-circle-area">
                    <div className="pizzamenu-allergie-circle">i</div>
                    <font color="#f9423a">재료성분</font>
                </div>
                <div className="pizzamenu-rank">
                    <select id="selectActive" value={selected} disabled={activeTab !== 0 ? "disabled" : ""} className={selectClassName} style={{height:"68px"}} onChange={handleSelectChange}>
                        <option value="2">신제품순</option>
                        <option value="1">가격낮은순</option>
                        <option value="0">가격높은순</option>
                    </select>
                </div>
            </div>
            <PizzaList></PizzaList>
            <PizzaPagination pageNum={pageNum}></PizzaPagination>
        </div>
    );
}

function PizzaList() {
    return(
        <div className="pc-pizzamenu-card-area">
            {pizzaData.map((pizza, index) => (
                <PizzaItem key={index} pizza={pizza}></PizzaItem>
            ))}
        </div>
    );
}

function PizzaItem({pizza}) {
    return(
        <div className="pizzamenu-area-item">
            <div className="carditem-web-container">
                <div className="image-container">
                    <img src={pizza.imgPath} className="image" alt='#'></img>
                </div>
                <div className="item">
                    <h5 className='item-name'>{pizza.name}</h5>
                    <h6 className='item-description'>{pizza.description}</h6>
                    <h5 className='pizzamenu-item-price'>
                        <span>
                            <span className='large'> L </span>
                            {pizza.priceL.toLocaleString()}
                        </span>
                        <span>
                            <span className='regular'> R </span>
                            {pizza.priceR.toLocaleString()}
                        </span>
                    </h5>
                    <div className='topping-box-container topping-box'>
                        <div className="box">{pizza.topping1}</div>
                    </div>
                    <div className='topping-box-container topping-box'>
                        <div className="box">{pizza.topping2}</div>
                    </div>
                    <div className='topping-box-container topping-box'>
                        {pizza.topping3 !== "" && <div className="box">{pizza.topping3}</div>}
                    </div>
                </div>
            </div>
            <div className="click-active shadow-box">
                <div className="view-button">
                    <div className='inner-container'>
                        <img src={icon_view} className="view-card" alt='#'></img>
                        상세보기
                    </div>
                </div>
                <div className="basket-button">
                    <div className="inner-container">
                        <img src={icon_basket} className="basket-card" alt='#'></img>
                        장바구니
                    </div>
                </div>
            </div>
        </div>
    );
}

function PizzaPagination({pageNum}) {
    const maxPage = pageNum;
    const minPage = 1;

    const [activePage, setActivePage] = useState(minPage);
    const pageItems = [];

    const addPageNum = () => {
        setActivePage(activePage + 1);
    }

    const subPageNum = () => {
        setActivePage(activePage - 1);
    }

    const handleClickPage = (index) => {
        setActivePage(index);
    }

    for(let i = 1; i <= pageNum; i++) {
        pageItems.push(<li key={i} onClick={() => handleClickPage(i)} className={activePage === i ? "number active" : "number"}>{i}</li>)
    }

    return(
        <div className="pizzamenu-pagination">
            <div className="layout-pagination-whole">
                <div className="layout-pagination el-pagination">
                    <button type="button" onClick={() => subPageNum()} disabled={activePage <= minPage ? "disabled" : ""} className="btn-prev">
                        <i className="el-icon el-icon-arrow-left"></i>
                    </button>
                    <ul className="el-pager">
                        {pageItems}
                    </ul>
                    <button type="button" onClick={() => addPageNum()} disabled={activePage >= maxPage ? "disabled" : ""} className="btn-next">
                        <i className="el-icon el-icon-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}