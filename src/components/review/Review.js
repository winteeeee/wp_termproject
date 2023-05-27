import React from 'react';
import "./Review.css";

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

                    </div>
                    <div className="pizza-item-info">

                    </div>
                </div>
            </div>
        </div>
    )
}
