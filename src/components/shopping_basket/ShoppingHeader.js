import "../main_page/HeaderLayout.css";
import hambuger_button from "../main_page/img/header_layout/hamburger_button.png";
import logo from "../main_page/img/header_layout/logo.png";
import icon_pizza from "../main_page/img/header_layout/icon_pizza.png";
import React, {useState} from "react";

const ShoppingHeader = () => {
    const [pageName, setPageName] = useState("main");
    const page = {
        mainPage: "main",
        pizzaPage: "pizza"
    }
    return (
        <div className="web-main-tab-header-layout">
            <HeaderLayout gotoMain={() => (setPageName(page.mainPage))}
                          gotoPizza={(() => setPageName(page.pizzaPage))}></HeaderLayout>
        </div>
    );
}
const pageData = {
    main: 0,
    pizza: 1
}

function HeaderLayout({gotoMain, gotoPizza}) {

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

    return (
        //메뉴 헤더 부분
        <div className="web-main-tab-header">
            <MainTabTop toggleMenu={toggleMenu} gotoMain={gotoMainPage} gotoPizza={gotoPizzaPage}></MainTabTop>
        </div>
    )
}

function MainTabTop({toggleMenu, gotoMain, gotoPizza}) {
    return (
        <div className="web-main-tab-top">
            <div className="tab-top-left">
                <img src={hambuger_button} onClick={() => toggleMenu()} alt="#" className="web-icon-menu"></img>
                <img src={logo} onClick={() => gotoMain()} alt="#" className="web-icon-logo"></img>
            </div>
            <div className="tab-top-middle">
                <span onClick={() => gotoPizza()} className="top-middle-text">피자</span>
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

export default ShoppingHeader;