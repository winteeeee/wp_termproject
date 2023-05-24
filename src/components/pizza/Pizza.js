import React, {useState} from 'react';
import "./Pizza.css";

import pizzaData from './PizzaData.js';

import icon_view from "./img/icon-view.png";
import icon_basket from "./img/icon-basket.png";

const PizzaPage = () => {
    return(
        <div>
            <div className="main-pizza-menu">
                <div className="pizza-menu">
                    <div className="pizza-menu-content">
                        <div className="pc-pizzamenu">
                            <PizzaTopText></PizzaTopText>
                            <PizzaTab></PizzaTab>
                            <PizzaMenu></PizzaMenu>
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

function PizzaTab() {
    const tabStyle = {
        border: "1px solid rgb(204, 204, 204)"
    }

    return(
        <div className="pc-pizzamenu-depth-tab-area">
            <div className="layout-tab-whole pc-pizzamenu-depth-tab">
                <table className="tab-container-web">
                    <tbody>
                        <tr className="column">
                            <td className="tab-title active" style={tabStyle}>전체</td>
                            <td className="tab-title default" style={tabStyle}>장인피자</td>
                            <td className="tab-title default" style={tabStyle}>달인피자</td>
                            <td className="tab-title default" style={tabStyle}>명품피자</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function PizzaMenu() {
    return(
        <div className="pc-pizzamenu-menu">
            <div className="pizzamenu-text-area">
                <div className="pizzamenu-allergie-circle-area">
                    <div className="pizzamenu-allergie-circle">i</div>
                    <font color="#f9423a">재료성분</font>
                </div>
                <div className="pizzamenu-rank">
                    <select id="selectActive" className="alvolo-select-noline" style={{height:"68px"}}>
                        <option value="2">신제품순</option>
                        <option value="1">가격낮은순</option>
                        <option value="0">가격높은순</option>
                    </select>
                </div>
            </div>
            <PizzaList></PizzaList>
            <PizzaPagination pizzaNum={pizzaData.length}></PizzaPagination>
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
                            {pizza.priceL}
                        </span>
                        <span>
                            <span className='regular'> R </span>
                            {pizza.priceR}
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

function PizzaPagination({pizzaNum}) {
    const pageNum = (pizzaNum + 1) / 2;
    const [activePage, setActivePage] = useState(1);
    const pageItems = [];

    for(let i = 1; i <= pageNum; i++) {
        pageItems.push(<li key={i} className={activePage === i ? "number active" : "number"}>{i}</li>)
    }

    return(
        <div className="pizzamenu-pagination">
            <div className="layout-pagination-whole">
                <div className="layout-pagination el-pagination">
                    <button type="button" disabled="disabled" className="btn-prev">
                        <i className="el-icon el-icon-arrow-left"></i>
                    </button>
                    <ul className="el-pager">
                        {pageItems}
                    </ul>
                    <button type="button" className="btn-next">
                        <i className="el-icon el-icon-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}