import React from 'react'
import './Career.css'
import careerImage from './images/career.jpg'
import careerRightImage from './images/Careerright.png'
import Currentopening from './Currentopening'
function Career() {
  return (
    <div>
        <div className="career-container">
                <div className="full-width-img">
                    <img src={careerImage} alt="career" />
                    <h1 className='text-on-image'>Careers</h1>
                </div>
                     <div className="Why-join-us">
                        <div className="why-join-text">
                            <h1 className='heading-career'>We love to see you GROW WITH US</h1>
                            <p className='why-join-content'>We are a performance-based organization, we firmly encourage Fulfill Vision coming from passion. We strive to provide the best work environment where our employees grow professionally and personally. We offer a winning combination of mobile and web development services to help our customers get the most out of our solutions, so they can focus on promoting their brand.
                            Our focus is on working with the best talent in the industry. We provide the best industry professionals to work with. If you are looking for a place that values your passion and desire to learn. Don’t worry, send us your candidacy for the post that best suits your expertise.</p>

                        </div>
                        <div className="why-join-img">
                            <img src={careerRightImage} alt='careerimg'></img>
                        </div>
                     </div>
                           
        </div>
       <Currentopening/>
    </div>
  )
}

export default Career