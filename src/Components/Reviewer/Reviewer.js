import React from 'react';
import { Card } from 'react-bootstrap';
import './Reviewer.css'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Reviewer = ({reviewer}) => {
    const {name, review, img} = reviewer;
    return (
        <div className='review'>
            <Card style={{ width: '18rem' }}>
  <Card.Img id='img' variant="top mx-auto" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>{review}</Card.Text>
    <p>Ratings: <FontAwesomeIcon className='filled' icon={faStar} /><FontAwesomeIcon className='filled' icon={faStar} /><FontAwesomeIcon className='filled' icon={faStar} /><FontAwesomeIcon className='filled' icon={faStar} /><FontAwesomeIcon className='filled' icon={faStar} /></p>
  </Card.Body>
</Card>
        </div>
    );
};

export default Reviewer;