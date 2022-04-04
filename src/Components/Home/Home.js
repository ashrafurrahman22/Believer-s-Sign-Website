import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import useReview from '../../hooks/useReview';
import Reviewer from '../Reviewer/Reviewer';
import './Home.css'


const Home = () => {
    const [reviewers, setReviewers] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setReviewers(data))
    }, [])

    // const [reviewers] = useReview();

    return (
        <div>
            <h2>this is home</h2>
          <div className="review">
          {
               reviewers.map(reviewer => <Reviewer
               key={reviewer.id}
               reviewer = {reviewer}
               ></Reviewer> )
           }
          </div>
          <div id='btn'>
          <Link  to='/review' className='reviewbtn'>See All Reviews</Link>
          </div>
        </div>
    );
};

export default Home;