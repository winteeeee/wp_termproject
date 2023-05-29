import React from 'react';
import { useState, useRef, useEffect } from "react";
import "./Review.css";
import pizza_01 from "./img/pizza_01.jpg";
import pizza_02 from "./img/pizza_02.jpg";
import pizza_03 from "./img/pizza_03.jpg";

const Review = () => {
    return (
        <ReviewInfo></ReviewInfo>
    )
}
export default Review;

function ReviewInfo(){
    
    return (
        <div className="pizza-menu-detail">
            <div className = "info-container">
                <div className = "review-page-header">
                리뷰보기
                </div>
                <div className = "pizza-info-container">
                    <div className= "pizza-slide-box">
                        <img className="slider" src={pizza_01}></img>
                        <img className="slider" src={pizza_02}></img>
                        <img className="slider" src={pizza_03}></img>
                    </div>
                    <div className="pizza-item-info">
                        <div className="pizza-item-name">쉬림프&핫치킨골드피자</div>
                        <div className="pizza-item-english-name">Shrimp & Hot Chicken Gold</div>
                        <div className="pizza-item-price">
                            <span className="pizza-item-large">L</span>
                            <span className="pizza-item-large-price">34,500</span>
                            <span className="pizza-item-ragular">R</span>
                            <span className="pizza-item-ragular-price">29,000</span>

                        </div>
                    </div>
                </div>
            </div>
            <div className= "review-info-container">
                <div className="review-menu">
                        <div className="review-star-rate">별점</div>
                        <div className="review-content">리뷰</div>
                        <div className="review-writer">작성자</div>
                </div>
                <div class = "whole-review-box">
                    {ShowReview(5,"꽃향기만 남기고 갔단다.","지수")}
                    {ShowReview(4,"난 몰랐어 내 맘이 이리 다채로운지","아이브")}
                    {ShowReview(2,"난 이 피자는 좀 아니라고 생각해요...","댓글")}
                    {ShowReview(5,"그게 무슨 소리니 댓글댓글아...","댓글저격러")}
                    {ShowReview(4,"이 집 순댓국밥 맛있습니다! 강추!","국밥러버")}
                </div>
            </div>
        </div>
    )
}

function ShowReview(rate,content,writer){
    return(
        <div className="review-box" id="review01">
            <div className="review-star-rate-box">{ShowStarRate(rate)}</div>
            <div className="review-content-box">{content}</div>
            <div className="review-writer-box">{writer}</div>
        </div>
    )
}

function ShowStarRate(rate){
    switch(rate){
        case 1:
            return(<div className="star">
                <span>★</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>)
        case 2:
            return(<div className="star">
                <span>★</span><span>★</span><span>☆</span><span>☆</span><span>☆</span>
                </div>)    
        case 3:
            return(<div className="star">
                <span>★</span><span>★</span><span>★</span><span>☆</span><span>☆</span>
                </div>)
        case 4:
            return(<div className="star">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
                </div>)   
        case 5:
            return(<div className="star">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>)  
        default:
            return(<div className="star">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>)                       
    }
}