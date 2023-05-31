import React from 'react';
import { useState, useRef, useEffect } from "react";
import "./Review.css";
import ReviewData from "./ReveiwData.js";
import PizzaData from "../pizza/PizzaData.js";

const Review = () => {
    return (
        <ReviewInfo pizza = {PizzaData[0]}></ReviewInfo>
    )
}
export default Review;

function ReviewInfo({pizza}){
    return (
        <div className="pizza-menu-detail">
            <div className = "info-container">
                <div className = "review-page-header">
                리뷰보기
                </div>
                <div className = "pizza-info-container">
                    <div className= "pizza-slide-box">
                        <img className="slider" src={pizza.imgPath}></img>
                    </div>
                    <div className="pizza-item-info">
                        <div className="pizza-item-name">{pizza.name}</div>
                        <div className="pizza-item-english-name">{pizza.nameEnglish}</div>
                        <div className="pizza-item-price">
                            <span className="pizza-item-large">L</span>
                            <span className="pizza-item-large-price">{pizza.priceL}</span>
                            <span className="pizza-item-ragular">R</span>
                            <span className="pizza-item-ragular-price">{pizza.priceR}</span>

                        </div>
                    </div>
                </div>
            </div>
            <div className= "review-info-container">
                <div className="review-menu">
                        <div className="review-star-rate">별점</div>
                        <div className="review-context">리뷰</div>
                        <div className="review-writer">작성자</div>
                </div>
                <div class = "whole-review-box">
                    {ShowReview(pizza.name)}
                    
                </div>
            </div>
        </div>
    )
}

function ShowReview(name){
    let matchedReviews = [];

    for(let i=0;i<ReviewData.length;i++){
        if(ReviewData[i].name == name){
            matchedReviews.push(
                <div className="review-box" id="review">
                    <div className="review-star-rate-box">{ShowStarRate(ReviewData[i].rate)}</div>
                    <div className="review-context-box">{ReviewData[i].context}</div>
                    <div className="review-writer-box">{ReviewData[i].writer}</div>
                </div>
            );
        }
    }
    return matchedReviews;
}

function ShowStarRate(rate){

    switch(rate){
        case 1:
            return(<div className="star">
                <span>★☆☆☆☆</span>
                </div>)
        case 2:
            return(<div className="star">
                <span>★★☆☆☆</span>
                </div>)    
        case 3:
            return(<div className="star">
                <span>★★★☆☆</span>
                </div>)
        case 4:
            return(<div className="star">
                <span>★★★★☆</span>
                </div>)   
        case 5:
            return(<div className="star">
                <span>★★★★★</span>
                </div>)  
        default:
            return(<div className="star">
                <span>☆☆☆☆☆</span>
                </div>)                       
    }
}