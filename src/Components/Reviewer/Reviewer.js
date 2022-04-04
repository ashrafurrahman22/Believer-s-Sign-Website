import React from 'react';
import { Card } from 'react-bootstrap';
import './Reviewer.css'

const Reviewer = ({reviewer}) => {
    const {name, ratings, review, img} = reviewer;
    return (
        <div className='review'>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top mx-auto" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>{review}</Card.Text>
    <p>Ratings: {ratings}</p>
  </Card.Body>
</Card>
        </div>
    );
};

export default Reviewer;