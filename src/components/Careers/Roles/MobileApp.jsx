import React from 'react'
import './Frontend.css'
import Form from './Form'
import MobileAppImage from '../images/app-development.jpg'
function MobileApp() {
  return (
    <div className='frontend-container'>
        <div className="frontend-form">
             <h1 className='role-heading'>Mobile App Developer(0-2 years experience)</h1>
                    <img src={MobileAppImage} alt="frontend" />
              <p className="job-overview"><b>Job Overview:</b> We are hiring a <b>Junior Mobile App Developer </b> to build innovative mobile applications. You’ll be working with cross-functional teams to create apps for iOS or Android platforms. If you have a passion for mobile development and want to grow your skills, apply now!</p>
             <div className="responsibility">
                  <label><b>Responsibility:</b></label>
                  <ul>
                  
                   <li> Develop mobile apps for iOS or Android using languages like Swift, Kotlin, or React Native.</li>
                   <li>  Collaborate with UI/UX designers to implement app designs.</li>
                   <li> Write clean and maintainable code.</li>
                   <li>Test and debug mobile applications to ensure a smooth user experience.</li>
                   <li> Optimize mobile apps for performance and scalability. </li>
                  </ul>
             </div>
                   <div className="key-skills">
                       <label><b>Key Skills:</b></label>
                       <ul>
                            <li>Experience with iOS (Swift) or Android (Kotlin) development.</li>
                            <li>  Knowledge of mobile development frameworks (React Native, Flutter).</li>
                            <li> Understanding of mobile app lifecycle and architecture.</li>
                            <li> Familiarity with version control tools like Git.</li>
                       </ul>
                   </div>
                          <div className="details">
                            <p><b>Experience:</b>0-2 years</p>
                            <p><b>Qualification:</b> Bachelor’s degree in Computer Science or related field is preferred,<br/> but not required.</p>
                          </div>
           <Form/>
         </div>
    </div>

  )
}

export default MobileApp