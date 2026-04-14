import React from 'react'
import slideImage from './REWARD_4.avif'
import slideImage1 from './REWARD_3.avif'
import slideImage2 from './REWARD_5.avif'
import './Home.css'
import Contents from '../Content/content'
import Marquees from '../Marque/Marquee'
function Home() {
  return (
    <div >
        <div className="slideimage-container">
            <div className="slide">
            <div className="slide-image">
                       <img src={slideImage} alt="slide"></img>
                  </div>
                  <div className="slide-image">
                       <img src={slideImage1} alt="slide"></img>
                  </div>
                  <div className="slide-image">
                       <img src={slideImage2} alt="slide"></img>
                  </div>
            </div>
        </div>
        <Marquees/>
        <Contents/>
    </div>
  )
}

export default Home