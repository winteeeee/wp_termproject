import React from 'react';
import { useState, useRef, useEffect } from "react";
import "./InfoModify.css";
import toggleBasic from "./img/no_check.png";
import toggleBlue from "./img/check.png";


const InfoModify = () => {
    return (
        <Modify></Modify>
    )
}
export default InfoModify;

function Modify(){
    const [collapseState, setCollapse] = useState(false);

    const handleCollapse = () => {
        setCollapse(!collapseState);
    };

    return(
        <div className = "my-page-inside">
            <div className = "my-page-header">마이페이지</div>
            <div className = "mypage-page-tab">
                <div className = "menutab-page-whole-div">
                    <div className ="menutab-page-title"><h5 className ="tab_start">주문내역</h5></div>
                    <div className ="menutab-page-title"><h5 className ="tab_start">쿠폰함</h5></div>
                    <div className ="menutab-page-title"><h5 className ="tab_start">MY CLASS</h5></div>
                    <div className ="menutab-page-title"><h5 className ="tab_start">비행기스탬프</h5></div>
                    <div className ="menutab-page-title"><h5 className ="tab_start">정보수정</h5></div>
                    <div className ="menutab-page-title"><h5 className ="tab_start">회원탈퇴</h5></div>
                </div>
            </div>
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
                                    <input type = "number" placeholder="12341234"
                                    disabled="disabled" oninput="" className="input-add-span" ></input>
                                    <span onClick={handleCollapse} className ="btn-auth-gray" id ="modify-phone">수정</span>  
                                </div>
                            </div>
                        </div>
                    </div>    
                        {collapseState && <CollapsePhoneBox></CollapsePhoneBox>}
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
                            <div className ="alvolo-input-auth">
                            <input type = "text" placeholder="상세주소"
                             oninput="" className="input-add-span"></input>
                        </div>   
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

const CollapsePhoneBox = () =>{
    return(
    <div className = "collapse-box">
        <h5>휴대전화 인증 후 변경이 가능합니다.</h5>
        <h6>변경할 휴대전화 번호를 입력하세요.</h6>
        <div className ="number-area-in">
            <div className ="number-area-left-in">
                <select class="alvolo-select">
                    <option value="010">010</option>
                    <option value="011">011</option>
                    <option value="016">016</option>
                    <option value="017">017</option>
                    <option value="019">019</option>
                </select>
            </div>
            <div className ="number-area-right-in">
                <div className ="alvolo-input-auth">
                    <input type = "number" placeholder="12341234"
                     oninput="" className="input-add-span" ></input>
                    <span className ="btn-auth-gray">인증번호 발송</span>  
                </div>
            </div>
        </div>
        <div className="alvolo-input-box-text-in">
            <div className ="alvolo-input-auth">
                <input type = "text" placeholder="인증번호"
                 oninput="" className="input-add-span"></input>
                <span className ="btn-auth-gray">인증번호 확인</span>  
            </div>  
        </div>
    </div>
    );
}

function PutTextLine(type,maxlength,placeholder,isable){
    return(
        <input type = {type} maxlength = {maxlength} placeholder={placeholder}
         disabled={isable} oninput="" className="input-defalut" ></input>
    )
}

