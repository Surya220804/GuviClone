import React from 'react'
import './Frontend.css'
import Form from './Form'
import DataAnalystImage from '../images/dataanalyst.jpg'
function DataAnalyst() {
  return (
    <div className='frontend-container'>
        <div className="frontend-form">
             <h1 className='role-heading'>Data Analyst(0-2 years experience)</h1>
                    <img src={DataAnalystImage} alt="frontend" />
              <p className="job-overview"><b>Job Overview:</b>We are seeking a <b>Junior UI/UX Designer</b> who can create exceptional user interfaces and experiences for our digital products. You’ll work closely with developers and product managers to ensure our designs are functional, user-friendly, and aligned with business goals. </p>
             <div className="responsibility">
                  <label><b>Responsibility:</b></label>
                  <ul>
                   <li>Create wireframes, prototypes, and high-fidelity designs for web and mobile applications.</li>
                   <li> Conduct user research and usability testing to understand user needs.</li>
                   <li> Collaborate with product teams to define user flows and design requirements.</li>
                   <li>Ensure consistency across all digital platforms with a focus on accessibility.</li>
                   <li>Iterate designs based on feedback and user testing results.</li>
                  </ul>
             </div>
                   <div className="key-skills">
                       <label><b>Key Skills:</b></label>
                       <ul>
                            <li>Proficiency in design tools such as Sketch, Figma, or Adobe XD</li>.
                            <li>  Strong understanding of UI/UX principles, responsive design, and accessibility.</li>
                            <li> Experience with user research and usability testing.</li>
                            <li> Knowledge of front-end technologies (HTML, CSS, JavaScript) is a plus.</li>
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

export default DataAnalyst