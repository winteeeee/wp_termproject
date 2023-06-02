import React from 'react';
import { useState, useRef, useEffect } from "react";
import "./InfoModify.css";
import TitleHeaderLayout from "./TitleHeaderLayout";
import toggleBasic from "./img/no_check.png";
import toggleBlue from "./img/check.png";


const InfoModify = () => {
    return (
        <Modify></Modify>
    )
}
export default InfoModify;

function Modify(){

    return(
        <div className = "my-page-inside">
            <div className = "my-page-header">마이페이지</div>
                <TitleHeaderLayout></TitleHeaderLayout>
            <div className = "mypage-page-content">
                <div className ="pc-top-text">나의 기본정보</div>

                <div className="pc-body-container">
                    <div className="padding-box"> 
                        <div className="alvolo-input-box-text">
                            {PutTextLine("text",524288,"이름",true)} 
                        </div>
                        <div className="alvolo-input-box-text">
                            {PutTextLine("text",524288,"아이디",true)} 
                        </div>
                        <div className="alvolo-input-box-text">
                            {PutTextLine("text",524288,"비밀번호",false)} 
                        </div>
                        <div className ="special_signInfo">
                            ※ 특수기호는 ! @ # $ % ^ * + = - 가능합니다
                        </div>
                        <div className="alvolo-input-box-text">
                            {PutTextLine("text",524288,"비밀번호 확인",false)} 
                        </div>
                        <div className ="number-area">
                            <div className ="number-area-left">
                                <select disabled="disabled" class="alvolo-select">
                                    <option value="010">010</option>
                                    <option value="011">011</option>
                                    <option value="016">016</option>
                                    <option value="017">017</option>
                                    <option value="019">019</option>
                                </select>
                            </div>
                            <div className ="number-area-right">
                                <div className ="alvolo-input-auth">
                                {PutTextLine("number",524288,"전화번호 뒷부분",false)} 
                                </div>
                            </div>
                        </div>
                    </div>    
                    <div className="padding-box2"> 
                        <div className="alvolo-input-box-text"> 
                            {PutTextLine("text",524288,"생년월일",true)} 
                        </div>
                        <div className="mail-area"> 
                            <div className ="mail-area-left">
                                {PutTextLine("text",524288,"이메일 앞부분",false)} 
                            </div>
                            @
                            <div className ="mail-area-right">
                                <select className = "alvolo-select">
                                    <option value="naver.com">naver.com</option>
                                    <option value="daum.com">daum.com</option>
                                    <option value="hotmail.com">hotmail.com</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="nate.com">nate.com</option>
                                    <option value="direct">직접입력</option>
                                </select>
                            </div>
                        </div>
                        <div className="alvolo-input-box-text"> 
                            {PutTextLine("text",524288,"주소",false)} 
                        </div>
                        <div className="alvolo-input-box-text">
                            {PutTextLine("text",524288,"상세주소",false)}  
                         </div>

                        <div className="membership-check-toggle">
                            <ToggleComponent context={"SMS 수신 동의"}></ToggleComponent>
                            <ToggleComponent context={"E-mail 수신 동의"}></ToggleComponent>
                            <div className="context"></div>
                        </div>
                    </div>
                    <div className="edit-membership-button-container">
                        <div className="gray-button">취소</div> 
                        <div className="blue-button">확인</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ToggleComponent = ({context}) => {
    const [toggleState, setToggleState] = useState(true);
  
    const handleToggle = () => {
        setToggleState(!toggleState);
    };
  
    return (
        <span onClick={handleToggle}>
            <div className="check-toggle">
                <div className="check-toggle-whole">
                    <img className='toggle' src={toggleState ? toggleBasic : toggleBlue} alt="Toggle" />
                </div>
            </div>
            <div className="context">{context}</div>
        </span>
    );
};


function PutTextLine(type,maxlength,placeholder,isable){
    return(
        <input type = {type} maxlength = {maxlength} placeholder={placeholder}
         disabled={isable} oninput="" className="input-defalut" ></input>
    )
}

