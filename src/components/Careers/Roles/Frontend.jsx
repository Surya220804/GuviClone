import React from 'react'
import './Frontend.css'
import FrontendImage from '../images/frontend.avif'
import Form from './Form'
function Frontend() {
  return (
    <div className='frontend-container'>
        <div className="frontend-form">
             <h1 className='role-heading'>Frontend Developer (0-3 years experience)</h1>
                    <img src={FrontendImage} alt="frontend" />
              <p className="job-overview"><b>Job Overview:</b> We are hiring a Junior Frontend Developer to build beautiful and responsive user interfaces for web applications. If you are passionate about creating engaging websites and want to grow your skills, this is the role for you!</p>
             <div className="responsibility">
                  <label><b>Responsibility:</b></label>
                  <ul>
                  <li> Develop and maintain the front end of web applications using HTML, CSS, and JavaScript.</li>
                  <li> Implement responsive designs to ensure a smooth experience across all devices.</li>
                  <li> Collaborate with backend developers to integrate APIs and data into the frontend.</li>
                  <li> Debug and troubleshoot issues in the user interface.</li>
                  <li> Participate in code reviews and contribute to best practices in development.</li>
                  </ul>
             </div>
                   <div className="key-skills">
                       <label><b>Key Skills:</b></label>
                       <ul>
                        <li>Strong knowledge of HTML, CSS, and JavaScript.</li>
                        <li>  Familiarity with frontend frameworks like React, Vue, or Angular.</li>
                        <li> Experience with version control (Git).</li>
                        <li> Understanding of responsive web design.</li>
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

export default Frontend