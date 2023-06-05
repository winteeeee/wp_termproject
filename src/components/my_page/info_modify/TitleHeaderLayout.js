import React from 'react';
import { useState, useRef, useEffect } from "react";
import "./TitleHeaderLayout.css";
import {Link, useLocation} from "react-router-dom";

const TitleHeaderLayout = () => {
    const location = useLocation();
    return(
        <div className = "mypage-page-tab">
            <div className = "menutab-page-div">
                <Link to="/myPage/myOrder">
                <div className ="menutab-page-title-div" ><h5 className ="tab_start" id={location.pathname === "/myPage/myOrder" ? "selected" : ""}>주문내역</h5></div>
                </Link>
                <div className ="menutab-page-title-div"><h5 className ="tab_start">쿠폰함</h5></div>
                <div className ="menutab-page-title-div"><h5 className ="tab_start">MY CLASS</h5></div>
                <div className ="menutab-page-title-div"><h5 className ="tab_start">비행기스탬프</h5></div>
                <Link to="/myPage/myInfo">
                <div className ="menutab-page-title-div"><h5 className ="tab_start" id={location.pathname === "/myPage/myInfo"? "selected" : ""}>정보수정</h5></div>
                </Link>
                <div className ="menutab-page-title-div"><h5 className ="tab_start">회원탈퇴</h5></div>
            </div>
        </div>
    );
    //TODO 선택 시 스타일 적용안됨
}
export default TitleHeaderLayout;