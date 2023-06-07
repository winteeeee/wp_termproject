import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import "./MainContent.css";

import page_1 from "./img/main_content/page_1.jpg";
import page_2 from "./img/main_content/page_2.jpg";
import page_3 from "./img/main_content/page_3.jpg";
import page_4 from "./img/main_content/page_4.jpg";
import icon_delivery from "./img/main_content/icon_delivery.png";
import icon_box from "./img/main_content/icon_packaging.png";

const MainContent = () => {
    return(
        <div className="login-before-outbox">
            <div className="remain-area-fill"></div>
                <MainImageSlide></MainImageSlide>
                <HomeOrder></HomeOrder>
        </div>
    );
}
export default MainContent;

function MainImageSlide() {
    const slideDelay = 3300;
    const slideWidth = 1200;
    const totalSlides = 5;
    const slideBox = -slideWidth;

    const [currentSlide, setCurrentSlide] = useState(0);
    const [moveDelay, setMoveDelay] = useState(300);

    const handleSlideNext = useCallback(() => {
        if (currentSlide === 4) {
            setCurrentSlide(0);
            setMoveDelay(0);
    
            setTimeout(() => {
                setCurrentSlide(1);
                setMoveDelay(300);
            }, 100);
        } else {
            const nextSlide = (currentSlide + 1) % totalSlides;
            setCurrentSlide(nextSlide);
        }
    }, [currentSlide, setCurrentSlide, setMoveDelay, totalSlides]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            handleSlideNext();
        }, slideDelay);
    
        return () => {
            clearInterval(interval);
        };
    }, [handleSlideNext, slideDelay]);

    const wrapperStyle = {
        transitionDuration: `${moveDelay}ms`,
        transform: `translateX(${slideBox - slideWidth * currentSlide}px)`,
    };

    return(
        <div className="main-image-slide">
            <div className="image-slide-main">
                <div className="layout-slidebox-whole-web">
                    <div className="swiper-container swiper swiper-container-initialized swiper-container-horizontal">
                        <div className="swiper-wrapper" style={wrapperStyle}>
                            <div className="swiper-slide" data-swiper-slide-index="3" style={{width:"1200px"}}>
                                <img src={page_4} alt="모바일 교환권 사용안내" className="w_img layout-slidebox-whole-image-active"></img>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="0" style={{width:"1200px"}}>
                                <img src={page_1} alt="이륙데이 이벤트" className="w_img layout-slidebox-whole-image-active"></img>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="1" style={{width:"1200px"}}>
                                <img src={page_2} alt="피자알볼로X원신 콜라보 품절 현황" className="w_img layout-slidebox-whole-image-active"></img>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="2" style={{width:"1200px"}}>
                                <img src={page_3} alt="피자알볼로 X 원신 콜라보레이션! 원신 피자가 떴다!" className="w_img layout-slidebox-whole-image-active"></img>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="3" style={{width:"1200px"}}>
                                <img src={page_4} alt="모바일 교환권 사용안내" className="w_img layout-slidebox-whole-image-active"></img>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="0" style={{width:"1200px"}}>
                                <img src={page_1} alt="이륙데이 이벤트" className="w_img layout-slidebox-whole-image-active"></img>
                            </div>
                        </div>
                        <div className="swiper-pagination swiper-pagination-bullets">
                            {Array.from({ length: totalSlides - 1 }).map((_, index) => (
                                <span
                                    key={index}
                                    className={`swiper-pagination-bullet ${index === currentSlide % (totalSlides - 1) ? "swiper-pagination-bullet-active" : ""}`}
                                ></span>
                            ))}
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function HomeOrder() {
    const navigate = useNavigate();

    return(
        <div className="home-logout-order">
            <div className="btn-red-order">
                <div className="inner-div" onClick={()=>navigate("/pizzaPage")}>
                    <img src={icon_delivery} alt="배달아이콘" className="btn-delivery-icon"></img>
                    <div className="btn-delivery-text">배달주문</div>
                </div>
                <div className="btn-red-line"></div>
                <div className="inner-div">
                <img src={icon_box} alt="포장아이콘" className="btn-box-icon"></img>
                    <div className="btn-box-text">포장주문</div>
                </div>
            </div>
        </div>
    );
}