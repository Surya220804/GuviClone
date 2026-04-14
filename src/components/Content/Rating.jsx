import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Rating.css'
function Rating() {
  return (
    <div className='rating-container'>
        <div className="rating">
            <h1 className='rating-heading'>What Our Learners Are Saying!</h1>
            <div className="google-icon">
            <FontAwesomeIcon icon={faGoogle} style={{ color: '#DB4437', fontSize: '40px' }} />
            </div>
            <div className='rating-content'>
            <h2>Rated 4.5/5.0</h2>
            <p>More than 3000 Google Reviews</p>
            </div>
        </div>
    </div>
  )
}

export default Rating