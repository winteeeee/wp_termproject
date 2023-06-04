import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./Pizza.css";

import icon_view from "./img/icon-view.png";
import icon_basket from "./img/icon-basket.png";

function PizzaMenu({activeTab}) {
    const [pizzaCount, setPizzaCount] = useState(0);
    const [selected, setSelected] = useState("3");
    const [activePage, setActivePage] = useState(1);
  
    useEffect(() => {
        const fetchPizzaCount = async () => {
            const response = await axios.get("http://localhost:4000/pizzaPage/api/PizzaDataCount" , {
                params: {
                    type: activeTab
                }
            });
            setPizzaCount(response.data);
        }

        fetchPizzaCount();
        setActivePage(1);
        if (activeTab !== 0) {
            setSelected("3");
        }
    }, [activeTab]);

    const pageNum = Math.floor((pizzaCount + 1) / 2);
  
    const handleSelectChange = (event) => {
        setSelected(event.target.value);
    };

    const selectClassName = (activeTab !== "전체" ? "alvolo-select-disable" : "alvolo-select-noline");
    const isDisabled = (activeTab !== "전체" ? "disabled" : "");

    return(
        <div className="pc-pizzamenu-menu">
            <div className="pizzamenu-text-area">
                <div className="pizzamenu-allergie-circle-area">
                    <div className="pizzamenu-allergie-circle">i</div>
                    <font color="#f9423a">재료성분</font>
                </div>
                <div className="pizzamenu-rank">
                    <select id="selectActive" value={selected} disabled={isDisabled} className={selectClassName} style={{height:"68px"}} onChange={handleSelectChange}>
                        <option value="3">신제품순</option>
                        <option value="2">가격낮은순</option>
                        <option value="1">가격높은순</option>
                    </select>
                </div>
            </div>
            <PizzaList activePage={activePage} type={activeTab} sort={selected}></PizzaList>
            <PizzaPagination setActivePage={setActivePage} activePage={activePage} pageNum={pageNum}></PizzaPagination>
        </div>
    );
}
export default PizzaMenu;

function PizzaList({activePage, type, sort}) {
    const [pizzaData, setPizzaData] = useState([]); // 피자 데이터 정보

    useEffect(() => {
        const fetchPizzaData = async () => {
            const response = await axios.get("http://localhost:4000/pizzaPage/api/loadPizzaData" , {
                params: {
                    type: type,
                    sort: sort,
                    currentPage: activePage
                }
            });
            setPizzaData(response.data);
        }

        fetchPizzaData();
    }, [activePage, type, sort]);

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
                    <img src={pizza.img} className="image" alt='#'></img>
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

function PizzaPagination({setActivePage, activePage, pageNum}) {
    const maxPage = pageNum;
    const minPage = 1;

    const addPageNum = () => {
        setActivePage(activePage + 1);
    }

    const subPageNum = () => {
        setActivePage(activePage - 1);
    }

    const handleClickPage = (index) => {
        setActivePage(index);
    }

    const pageItems = Array.from({ length: pageNum }, (_, index) => index + 1);

    return(
        <div className="pizzamenu-pagination">
            <div className="layout-pagination-whole">
                <div className="layout-pagination el-pagination">
                    <button type="button" onClick={() => subPageNum()} disabled={activePage <= minPage ? "disabled" : ""} className="btn-prev">
                        <i className="el-icon el-icon-arrow-left"></i>
                    </button>
                    <ul className="el-pager">
                        {pageItems.map((page) => (
                            <li key={page} onClick={() => handleClickPage(page)} className={activePage === page ? "number active" : "number"}>{page}</li>
                        ))}
                    </ul>
                    <button type="button" onClick={() => addPageNum()} disabled={activePage >= maxPage ? "disabled" : ""} className="btn-next">
                        <i className="el-icon el-icon-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}