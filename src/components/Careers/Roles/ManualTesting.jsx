import React from 'react'
import './Frontend.css'
import ManualTestingImage from '../images/backend.jpg'
import Form from './Form'
function ManualTesting() {
  return (
    <div className='frontend-container'>
        <div className="frontend-form">
             <h1 className='role-heading'>Junior Manual Tester (0-2 years experience)</h1>
                    <img src={ManualTestingImage} alt="frontend" />
              <p className="job-overview"><b>Job Overview:</b> We are looking for a Junior Manual Tester who can ensure the quality of our software applications by identifying bugs and ensuring smooth user experiences. As a Manual Tester, you will be responsible for executing test cases and reporting issues while collaborating with the development team to deliver error-free software.</p>
             <div className="responsibility">
                  <label><b>Responsibility:</b></label>
                  <ul>
                  <li>Execute manual test cases and report any defects or issues.</li>
                  <li>  Create detailed bug reports and track them using bug-tracking tools (e.g., JIRA, Bugzilla).</li>
                  <li> Collaborate with developers to ensure bugs are resolved.</li>
                  <li> Perform regression, smoke, and functional testing.</li>
                  <li> Document test cases, test plans, and test results.</li>
                  <li> Participate in team meetings and provide feedback for product improvements.</li>
                  </ul>
             </div>
                   <div className="key-skills">
                       <label><b>Key Skills:</b></label>
                       <ul>
                            <li>Understanding of Software Development Life Cycle (SDLC).</li>
                            <li>Strong attention to detail and problem-solving abilities.</li>
                            <li> Familiarity with test case writing and bug-tracking tools.</li>
                              <li> Basic knowledge of databases and SQL is a plus.</li>
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
export default ManualTesting