import React from 'react'
import './Frontend.css'
import BackendImages from '../images/backend.jpg'
import Form from './Form'
function Backend() {
  return (
    <div className='frontend-container'>
    <div className="frontend-form">
         <h1 className='role-heading'>Backend Developer(0-2 years experience)</h1>
                <img src={BackendImages} alt="frontend" />
          <p className="job-overview"><b>Job Overview:</b>We are looking for a <b>Junior Backend Developer</b> who is passionate about building and maintaining robust backend systems. You will work on the server-side logic, databases, and APIs to ensure seamless integration with the frontend</p>
          <div className="responsibility">
              <label><b>Responsibility:</b></label>
              <ul>
               <li>Develop and maintain backend services and APIs.</li>
               <li> Work with databases (SQL, NoSQL) to store and retrieve data efficiently.</li>
               <li>Collaborate with frontend developers to ensure smooth integration.</li>
               <li> Optimize applications for maximum speed and scalability.</li>
               <li> Troubleshoot and debug issues in the backend.</li>
              </ul>
         </div>
               <div className="key-skills">
                   <label><b>Key Skills:</b></label>
                   <ul>
                        <li>Strong knowledge of server-side languages like Node.js, Python, or Java.</li>
                        <li> Understanding of databases (MySQL, MongoDB, etc.).</li>
                        <li> Experience with API development and integration.</li>
                        <li> Familiarity with version control systems like Git.</li>
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

export default Backend