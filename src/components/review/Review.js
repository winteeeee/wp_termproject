import React from 'react';
import { useState, useRef, useEffect } from "react";
import "./Review.css";
import ShoppingHeader from "../shopping_basket/ShoppingHeader";
<<<<<<< Updated upstream
import PizzaData from "../pizza/PizzaData";
import axios from 'axios';
=======
import ReviewData from "./ReveiwData.js";
>>>>>>> Stashed changes

const Review = ({PizzaData}) => {

    return (
        <div>
        <ShoppingHeader></ShoppingHeader>
        <ReviewInfo pizza = {PizzaData}></ReviewInfo>
        </div>
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
                        <img className="slider" src={pizza.img}></img>
                    </div>
                    <div className="pizza-item-info">
                        <div className="pizza-item-name">{pizza.name}</div>
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

    const [reviewData, setReviewData] = useState([]); // 피자 데이터 정보

    useEffect(() => {
        const fetchReviewData = async () => {
<<<<<<< Updated upstream
            const response = await axios.get("http://localhost:4000/reviewPage/api/ReviewTest" , {
                params: {
                    name:name
=======
            const response = await axios.get("http://localhost:4000/reviewPage/api/reviewTest" , {
                params: {
                    name: name,
>>>>>>> Stashed changes
                }
            });
            setReviewData(response.data);
        }
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
        fetchReviewData();
    }, [name]);

    for(let i=0;i<reviewData.length;i++){
        if(reviewData[i].name == name){
            matchedReviews.push(
                <div className="review-box" id="review">
                    <div className="review-star-rate-box">{ShowStarRate(reviewData[i].rate)}</div>
                    <div className="review-context-box">{reviewData[i].context}</div>
                    <div className="review-writer-box">{reviewData[i].writer}</div>
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