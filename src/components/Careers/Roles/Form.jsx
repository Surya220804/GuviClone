import React from 'react'
import './Form.css'
function Form() {
  return (
    <div className='form-container'>
        <form className='forms'>
                  <label htmlFor="name">Your name</label>
                  <input type="text" />
                  <label htmlFor="">Your Email</label>
                  <input type="text" />
                  <label htmlFor="">Subject</label>
                  <input type="text" />
                  <label htmlFor="">Your message (optional)</label>
                  <textarea rows={10}></textarea>
                  <button className='submit-btn'>Submit</button>
                </form>
    </div>
  )
}

export default Form