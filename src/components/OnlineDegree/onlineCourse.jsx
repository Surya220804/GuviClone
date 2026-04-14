import React from 'react'
import './online.css'
import OnlineImage from './OnlineDegree.webp'
function OnlineCourse() {
    console.log("FDeom")
  return (
        <div className='online-form-container'>
            <h1 className=''>Class Registration Form</h1>
            <h4>Fill out the form carefully for registration</h4>
        <form className='online-forms'>
          <div className="name-group">
            <div className="form-field">
        <label>Student Name:</label>
        <input type="text" name='firstName' />
        </div>
            <div className="form-field">
         <label htmlFor="">Middle Name</label>
        <input type="text" name='MiddleName' />
         </div>
            <div className="form-field">
         <label htmlFor="">Last Name</label>
        <input type="text" name='LastName' />
        </div>
           </div>
            <div className="form-field">
           <label htmlFor="">Gender</label>
           <select name='gender'>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="other">Other</option>
           </select>
           </div>
            <div className="form-field">
              <label htmlFor="">Student Email</label>
           <input type="email" placeholder='email@gmail.com'/>
           </div>
            <div className="form-field">
              <label htmlFor="">Student Id</label>
           <input type="text" placeholder='student id' />
           </div>
            <div className="form-field">
              <label htmlFor="">Select Class</label>
           <select name="Classlist">
            <option value="">--Select Class--</option>
            <option value="Math">Maths</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
           </select>
           </div>
           <button type='submit' className='online-btn'>Submit</button>
            </form>
    </div>
    
  )
}

export default OnlineCourse