import React, {useState, useEffect} from 'react';

import "./HeaderLayout.css";

import hambuger_button from "./img/header_layout/hamburger_button.png";
import logo from "./img/header_layout/logo.png";
import icon_pizza from "./img/header_layout/icon_pizza.png";
import icon_airplane from "./img/header_layout/icon_airplane.png";
import icon_arrow_more from "./img/header_layout/icon_arrow_more.png";
import x_button from "./img/header_layout/x_button.png";

const pageData = {
    main: 0,
    pizza: 1
}

const HeaderLayout = ({gotoMain, gotoPizza}) => {
    const [isOpen, setMenu] = useState(false);
    const [pageCode, setPage] = useState(pageData.main);
    
    function toggleMenu() {
        setMenu(isOpen => !isOpen);
    }

    function gotoPizzaPage() {
        gotoPizza();
        setMenu(false);
        setPage(pageData.pizza);
    }

    function gotoMainPage() {
        gotoMain();
        setMenu(false);
        setPage(pageData.main);
    }

    return(
        <div className="web-main-tab-header">
            <MainTabTop toggleMenu={toggleMenu} gotoMain={gotoMainPage} gotoPizza={gotoPizzaPage}></MainTabTop>
            <LayoutTabSlide pageNum={pageCode}></LayoutTabSlide>
            <MainTabCollapse isOpen={isOpen} gotoPizza={gotoPizzaPage}></MainTabCollapse>
        </div>
    );
}
export default HeaderLayout;

function MainTabTop({toggleMenu, gotoMain, gotoPizza}) {
    return (
        <div className="web-main-tab-top">
            <div className="tab-top-left">
                <img src={hambuger_button} onClick={()=>toggleMenu()} alt="#" className="web-icon-menu"></img>
                <img src={logo} onClick={()=>gotoMain()} alt="#" className="web-icon-logo"></img>
            </div>
            <div className="tab-top-middle">
                <span onClick={()=>gotoPizza()} className="top-middle-text">피자</span>
                <span className="top-middle-text">스페셜반반피자</span>
                <span className="top-middle-text">세트</span>
                <span className="top-middle-text">사이드</span>
                <span className="top-middle-text">하프앤하프</span>
                <span className="top-middle-text">멤버십 ˙ 제휴할인</span>
                <span className="top-middle-text">이벤트</span>
            </div>
            <div className="tab-top-right">
                <div className="tab-text-img-layout">
                    <div className="top-right-text-layout">
                        <span className="top-right-text"> 마이페이지 </span>
                        <span className="top-right-text"> 회원가입 </span>
                        <span className="top-right-text"> 로그인 </span>
                    </div>
                    <img src={icon_pizza} alt="#" className="icon-pizza"></img>
                </div>
            </div>
        </div>
    );
}

function LayoutTabSlide({pageNum}) {
    const minLeft = 284;
    const minWindowWidth = 1297;
    const [leftValue, setLeftValue] = useState(minLeft);

    useEffect(() => {
        const handleWindowResize = () => {
            const windowWidth = window.innerWidth;
    
            if (windowWidth > minWindowWidth) {
                setLeftValue(() => minLeft + (windowWidth - minWindowWidth) * 0.425);
            }
            else if(leftValue > minLeft) {
                setLeftValue(minLeft);
            }
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [leftValue]);

    const iconStyle = {
        left: `${leftValue}px`,
        display: pageNum === 0 ? "none" : "block"
    }

    return(
        <div className="layout-tab-slide">
            <img src={icon_airplane} alt="#" className="icon-airplane" style={iconStyle}></img>
            <div className="tab-slide-line"></div>
        </div>
    );
}

function MainTabCollapse({isOpen, gotoPizza}) {
    const collapseArray =
    [["사이드메뉴"],
    ["멤버십 ˙ 제휴할인", "멤버십 혜택", "통신사 제휴 할인"],
    ["이벤트"],
    ["매장찾기", "지역명 찾기", "매장명 찾기", "현위치 찾기"],
    ["마이페이지", "주문내역", "쿠폰함", "MY CLASS", "비행기스탬프", "정보수정", "회원탈퇴"],
    ["주문하기", "배달주문하기", "포장주문하기", "간편주문", "E쿠폰", "선물하기"]];

    const middleItemArray = [" 회사소개 ", " 가맹문의 ", " 고객센터 ", " 단체주문 "];

    return(
        <div className={`web-main-tab-collapse ${isOpen ? "open" : ''}`}>
            <div className="web-collapse-tab-top">
                <div className="collapse-tab-item">
                    <div onClick={()=>gotoPizza()} className="tab-item"> 피자 </div>
                    <div onClick={()=>gotoPizza()} className="tab-item"> 전체피자 </div>
                    <div className="tab-item"> 스페셜반반피자 </div>
                    <div className="tab-item"> 세트메뉴 </div>
                    <div className="tab-item"> 하프앤하프 </div>
            </div>
                {collapseArray.map((array, index) => (
                    <TabsCollapse key={index} itemArray={array}></TabsCollapse>
                ))}
            </div>
            <div className="web-collapse-tab-middle">
                {middleItemArray.map((text, index) => (
                    <span key={index} className="tab-middle-item">
                        {text}
                        <img src={icon_arrow_more} className="img-arrow-more" alt="#"></img>
                    </span>
                ))}
                <img src={x_button} alt="collapse 닫기" className="x-button"></img>
            </div>
        </div>
    );
}

function TabsCollapse({itemArray}) {
    return (
        <div className="collapse-tab-item">
            {itemArray.map((text, index) => (
                <div key={index} className="tab-item">{text}</div>
            ))}
        </div>
    );
}
  
  
  
  
  
  