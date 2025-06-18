import React, { useState } from 'react'
import DatascienceImage from './datascience.webp'
import AIMLimage  from './aiml.webp'
import buisnesAnalatycImage from './business-and-marketing.webp'
import DevopsImage from './devops.webp'
import FullstackImage from'./Fullstack.webp'
import JavaImage from './java-fsd.webp'
import AutomationImage from './selinium-automation.webp'
import UiuxImage from './UIUX.webp'
import './content.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe} from '@fortawesome/free-solid-svg-icons';
import Rating from './Rating'
import Footer from '../Footer/footer'
function Contents() {
    const coursename=[
        {
            img:DatascienceImage,
            Course:'Datascience Course',
            Language:'Tamil English & Hindi'
        },
        {
            img:FullstackImage,
            Course:'Full Stack Development with AI course',
            Language:'Tamil English & Hindi'

        },
        {
            img:UiuxImage,
            Course:'UI/UX Design Course',
            Language:'Tamil English & Hindi'

        },
        {
            img:buisnesAnalatycImage,
            Course:'Business And Analatyics with AI Tools',
            Language:'Tamil English & Hindi'

        },
        {
            img:DevopsImage,
            Course:'DevOps Course',
            Language:'Tamil English & Hindi',
        },
        {
            img:AIMLimage,
            Course:'Artificial Learning And Machine Learning ',
            Language:'Tamil English & Hindi',

        },
        {
            img:AutomationImage,
            Course:'Selenium Automation Testing Course',
            Language:'Tamil English & Hindi',
        },
        {
            img:JavaImage,
            Course:'Java FullStack Development Course',
            Language:'Tamil English & Hindi',

        },
    ]
    const[startIndex,setStartIndex]=useState(0)
    const visibleImage=4;
     const slideCount=1;
     const max=coursename.length-visibleImage;
     const handleChange=(direction)=>{
        const newStart=startIndex+direction*slideCount
        if(newStart<0){
            setStartIndex(0)
        }else if(newStart>max){
            setStartIndex(max)
        }else{
            setStartIndex(newStart)
        }
     }
  return (
         <> 
         <h1 className='content-heading' ><ul><li></li></ul>Live Classes + Placement Guidance</h1>
         <p className='content-para'>We offers one of the industry’s leading Project Based Career Programs that promises Placement Guidance on completing the program.</p>
        <div className="manualSlide-container">
        <button className='prev-btn' onClick={()=>handleChange(-1)} disabled={startIndex===0}>&#10094;</button>
            <div className="manual-slider">
                {coursename.slice(startIndex,startIndex+visibleImage).map((item,index)=>(
                    <div className="manual-slide" key={index}>
                        <img src={item.img} alt='img'/>
                        <h4 className='course-names'>{item.Course}</h4>
                        <div className='lanuguage-icon'>
                            <FontAwesomeIcon icon={faGlobe} size='larger'/>
                            </div>
                        <p className='language-p'>{item.Language}</p>
                        <div className="btn">
                        <button className='syllabus-btn'>Syllabus</button>
                        <button className='know-btn'>Know More</button>
                        </div>
                    </div>
                ))}
            </div>
        <button className='next-btn' onClick={()=>handleChange(1)} disabled={startIndex>=max}>&#10095;</button>
        </div>
        <button className='view-all-btn'>Explore All programs</button>
        <Rating/>
        <Footer/>
        </>
  )
}

export default Contents;