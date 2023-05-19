import "./HeaderLayout.css";

import hambuger_button from "./img/hamburger_button.png";
import logo from "./img/logo.png";
import icon_pizza from "./img/icon_pizza.png";
import icon_airplane from "./img/icon_airplane.png";
import icon_arrow_more from "./img/icon_arrow_more.png";
import x_button from "./img/x_button.png";

function HeaderLayout() {
    return(
        <div className="web-main-tab-header">
            <MainTabTop></MainTabTop>
            <LayoutTabSlide></LayoutTabSlide>
            <MainTabCollapse></MainTabCollapse>
        </div>
    );
}
export default HeaderLayout;

function MainTabTop() {
    const middleTextArray = ["피자", "스페셜반반피자", "세트", "사이드", "하프앤하프", "멤버십˙제휴할인", "이벤트"];
    const topRightTextArray = ["마이페이지", "회원가입", "로그인"];

    return (
        <div className="web-main-tab-top">
            <div className="tab-top-left">
                <img src={hambuger_button} alt="#" className="web-icon-menu"></img>
                <img src={logo} alt="#" className="web-icon-logo"></img>
            </div>
            <div className="tab-top-middle">
                {middleTextArray.map((text, index) => (
                    <span key={index} className="top-middle-text">{text}</span>
                ))}
            </div>
            <div className="tab-top-right">
                <div className="tab-text-img-layout">
                    <div className="top-right-text-layout">
                        {topRightTextArray.map((text, index) => (
                            <span key={index} className="top-right-text">{text}</span>
                        ))}
                    </div>
                    <img src={icon_pizza} alt="#" className="icon-pizza"></img>
                </div>
            </div>
        </div>
    );
}

function LayoutTabSlide() {
    return(
        <div className="layout-tab-slide">
            <img src={icon_airplane} alt="#" className="icon-airplane"></img>
            <div className="tab-slide-line"></div>
        </div>
    );
}

function MainTabCollapse() {
    const collapseArray =
    [["피자", "전체피자", "스페셜반반피자", "세트메뉴", "하프앤하프"], 
    ["사이드메뉴"],
    ["멤버십˙제휴할인", "멤버십 혜택", "통신사 제휴 할인"],
    ["이벤트"],
    ["매장찾기", "지역명 찾기", "매장명 찾기", "현위치 찾기"],
    ["마이페이지", "주문내역", "쿠폰함", "MY CLASS", "비행기스탬프", "정보수정", "회원탈퇴"],
    ["주문하기", "배달주문하기", "포장주문하기", "간편주문", "E쿠폰", "선물하기"]];

    const middleItemArray = ["회사소개", "가맹문의", "고객센터", "단체주문"];

    return(
        <div className="web-main-tab-collapse">
            <div className="web-collapse-tab-top">
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
  
  
  
  
  
  