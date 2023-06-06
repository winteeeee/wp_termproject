import React from 'react';
import { useState, useRef, useEffect } from "react";
import "./Review.css";
import ShoppingHeader from "../shopping_basket/ShoppingHeader";
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Review = () => {
    const [pizza, setPizza] = useState([]);
    const location = useLocation();
    const nameParam = new URLSearchParams(location.search).get("name");
    let decodedName = nameParam.replace(/&/g, "%26");
    if(decodedName == "쉬림프ㅎ핫치킨골드피자"){
        decodedName = "쉬림프&핫치킨골드피자";
    } 
    useEffect(() => {
        
        const fetchPizzaData = async () => {
            const response = await axios.get("http://localhost:4000/pizzaPage/api/loadOnePizzaData" , {
                params: {
                    name: decodedName
                }
            });
            setPizza(response.data[0]);
        }
        fetchPizzaData();
        
    });
    return (
        <div>
        <ShoppingHeader></ShoppingHeader>
        <ReviewInfo pizza = {pizza}></ReviewInfo>

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

                <div className = "whole-review-box">
                    <ShowReview name={pizza.name} ></ShowReview>
                    

                </div>
            </div>
        </div>
    )
}

function ShowReview({name}){
    let matchedReviews = [];
    const [reviewData, setReviewData] = useState([]); // 피자 데이터 정보

    useEffect(() => {
        const fetchReviewData = async () => {

            const response = await axios.get("http://localhost:4000/reviewPage/api/loadReview" , {
                params: {
                    name:name

                }
            });
            setReviewData(response.data);
        }
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
