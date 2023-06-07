import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import "./HeaderLayout.css";

import hambuger_button from "./img/header_layout/hamburger_button.png";
import logo from "./img/header_layout/logo.png";
import icon_pizza from "./img/header_layout/icon_pizza.png";
import icon_airplane from "./img/header_layout/icon_airplane.png";
import icon_arrow_more from "./img/header_layout/icon_arrow_more.png";
import x_button from "./img/header_layout/x_button.png";

const HeaderLayout = () => {
    const [isOpen, setMenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    function movePage(pagePath) {
        if (location.pathname === "/") {
            navigate(pagePath);
        } else {
            navigate("../" + pagePath);
        }
        setMenu(false);
    }
    
    function toggleMenu() {
        setMenu(isOpen => !isOpen);
    }

    return(
        <div className="web-main-tab-header">
            <MainTabTop toggleMenu={toggleMenu} movePage={movePage} ></MainTabTop>
            <LayoutTabSlide></LayoutTabSlide>
            <MainTabCollapse isOpen={isOpen} movePage={movePage}></MainTabCollapse>
        </div>
    );
}
export default HeaderLayout;

function MainTabTop({toggleMenu, movePage}) {
    const testUserID = "testUser"
    const testOwnerID = "testOwner"
    const [cookies, setCookie, removeCookie] = useCookies(['loginID']);

    function login(userID) {
        setCookie('loginID', userID, { path: '/' });
    }

    function userLogin() {
        login(testUserID);
    }

    function ownerLogin() {
        login(testOwnerID);
    }

    function logout() {
        removeCookie('loginID');
        movePage("/");
    }

    function gotoMyPage() {
        const userID = cookies.loginID;

        if(userID === testOwnerID) movePage("/ownerPage");
        else if(userID) movePage("/myPage");
        else alert("로그인이 필요한 페이지입니다!");
    }

    function gotoShoppingBasket() {
        const userID = cookies.loginID;

        if(userID === testUserID) {
            movePage("/shoppingBasket")
        } else if (userID === testOwnerID) {
            alert("장바구니 기능은 일반 회원만 사용할 수 있습니다!");
        } else {
            alert("로그인이 필요한 페이지입니다!");
        }
    }

    return (
        <div className="web-main-tab-top">
            <div className="tab-top-left">
                <img src={hambuger_button} onClick={()=>toggleMenu()} alt="#" className="web-icon-menu"></img>
                <img src={logo} onClick={()=>movePage("/")} alt="#" className="web-icon-logo"></img>
            </div>
            <div className="tab-top-middle">
                <span onClick={()=>movePage("pizzaPage")} className="top-middle-text">피자</span>
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
                        <span className="top-right-text" onClick={gotoMyPage}> 마이페이지 </span>
                        <span className="top-right-text" onClick={ownerLogin}> 회원가입 </span>
                        {!cookies.loginID ? <span className="top-right-text" onClick={userLogin}> 로그인 </span>
                            : <span className="top-right-text" onClick={logout}> 로그아웃 </span>}
                        
                    </div>
                    <img src={icon_pizza} alt="#" className="icon-pizza" onClick={gotoShoppingBasket}></img>
                </div>
            </div>
        </div>
    );
}

function LayoutTabSlide() {
    const minLeft = 284;
    const minWindowWidth = 1297;
    const [leftValue, setLeftValue] = useState(minLeft + (window.innerWidth - minWindowWidth) * 0.425);

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

    const location = useLocation();
    const {loginID} = useParams();
    const iconStyle = {
        left: `${leftValue}px`,
        display: location.pathname === "/" ? "none" : "block"
    }

    return(
        <div className="layout-tab-slide">
            <img src={icon_airplane} alt="#" className="icon-airplane" style={iconStyle}></img>
            <div className="tab-slide-line"></div>
        </div>
    );
}

function MainTabCollapse({isOpen, movePage}) {
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
                    <div onClick={()=>movePage("/pizzaPage")} className="tab-item"> 피자 </div>
                    <div onClick={()=>movePage("/pizzaPage")} className="tab-item"> 전체피자 </div>
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
  
  
  
  
  
  