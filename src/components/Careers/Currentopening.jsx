import React from 'react'
import './currentopening.css'
import FrontendImage from './images/frontend.avif'
import backendImage from './images/backend.jpg'
import AppdevelopmentImage from './images/app-development.jpg'
import manualTesting from './images/manualtesting.jpg'
import UIUXImage from './images/uiux.jpeg'
import dataAnalystImage from './images/dataanalyst.jpg'
import { Link, useNavigate } from 'react-router-dom'
function Currentopening() {
  const openingRoles=[
    {
      img:FrontendImage,
      Role:'Frontend Developer(0-2 years experience)',
      path:'FrontendPage',
    },
    {
      img:backendImage,
      Role:'Backend Developer(0-2 years experience)',
      path:'BackendPage',
    },
    {
      img:AppdevelopmentImage,
      Role:'Mobile App Developer (0-3 years experience)',
      path:'MobileAppPage',
    },
    {
      img:manualTesting,
      Role:'Junior Manual Tester (0-2 years experience)',
      path:'ManualTestingPage',
    },
    {
      img:dataAnalystImage,
      Role:'Junior Data Analyst (0-2 years experience) ',
      path:'dataAnalystPage',
    },
    {
      img:UIUXImage,
      Role:'Junior UI/UX Designer (0-2 years experience)',
      path:'UIUXPage',
    }
  ]
  const navigate=useNavigate()
  return (
    <div className='openings-container'>
      <h1 className='current-openings'>Current Openings</h1>
      <div className="openening-roles">
        {
          openingRoles.map((item,index)=>(
            <div className="opening-images">
              <img src={item.img} key={index} alt={item.Role} onClick={()=>navigate(`/apply/${item.path}`)}/>
              <h4 className='role'>{item.Role}</h4>
              <button className='apply-btn' onClick={()=>navigate(`/apply/${item.path}`)}>Apply</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Currentopening