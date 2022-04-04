import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import Reviewer from '../Reviewer/Reviewer';
import './Home.css'


const Home = () => {

    const [reviewers, setReviewers] = useReview();

    return (
        <div className='main-container'>
            <div className='container'>
                <div className="heading">
                <h1 className='firstheading'>King of All Perfumes</h1>
                <h2 className='pdname'>Black Oudh</h2>
                <p id='description'>Black Oudh called king of all perfumes because of its smell. Black Oudh Perfumes is a Amber Woody fragrance for women and men. Top note is Musk; middle notes are Cedar and Herbal Notes; base notes are Amber, Patchouli and Vanilla.</p>
                </div>
                <div className="image">
                    <img src={'https://www.cloudskyonline.com/wp-content/uploads/2020/06/black-oudh-15ml-perfume-oil-1.jpg'} alt="" />
                </div>
            </div>


            <h2 className='reviewName'>Reviews</h2>
          <div className="review">
          {
               reviewers.slice(0, 3).map(reviewer => <Reviewer
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