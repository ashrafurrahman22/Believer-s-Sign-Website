import React from 'react';
import useReview from '../../hooks/useReview';
import Reviewer from '../Reviewer/Reviewer';
import './Review.css'

const Review = () => {

    const [reviewers, setReviewers] = useReview();
    console.log(reviewers);

    return (
        <div className='reviewPage'>
            {
                reviewers.map(reviewer => <Reviewer
                key={reviewer.id}
                reviewer = {reviewer}
                ></Reviewer> )
            }
        </div>
    );
};

export default Review;