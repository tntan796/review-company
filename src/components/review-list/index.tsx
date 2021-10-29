import React from 'react';
import './styles.scss';
import ReviewItem from '../review-item';
function ReviewList() {
    return (
        <div className="review-list">
            <ReviewItem/>
            <ReviewItem/>
            <ReviewItem/>
        </div>
    );
}

export default ReviewList;