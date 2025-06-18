import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram,faInstagram,faXTwitter,faFacebook,faYoutube } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <div className='footer-total-container'>
    <div className='footer-container'>
    <div className="online-class">
        <ul>
            <h4 className='footer-heading'>Online-classes <span className='live-class'><button ><ul><li></li></ul>Live classes</button></span></h4>
            <li>Full Stack Development</li>
            <li>Automation & Testing</li>
            <li> Data Science</li>
            <li>UI/UX</li>
            <li>DevOps</li>
            <li>Data Engineering</li>
            <li>Business Analytics with Digital Marketing</li>
            <li>All Programs</li>
        </ul>
    </div>
    <div className="popular-course">
           <ul>
           <h4 className='footer-heading'>Popular Courses</h4>
            <li>Python - IIT-M Pravartak Certified</li>
              <li>  Java</li>
              <li> Mobile Hacking</li>
              <li> C Programming</li>
              <li> AWS</li>
              <li>Angular</li>
              <li>Dark Web</li>
              <li> All Courses</li>
           </ul>
    </div>
    <div className="Practice-Platform">
        <ul>
            <h4 className='footer-heading'>Practice Platform</h4>
            <li>Hacker Ranker</li>
            <li>codevitta</li>
            <li>leetcode</li>
        </ul>
    </div>
    <div className="company-detail">
        <ul>
            <h4 className="footer-heading">About Company</h4>
            <li>Refund Policy</li>
              <li>  FAQs</li>
              <li>Contact Us</li>
              <li> About Us</li>
        </ul>
    </div>
    </div>
    <div className="sub-container">
    <div className="content-left">
        <p style={{paddingLeft:'10px'}}>&#169; copyright2025</p>
    <p>Geek Network Private Limited is a leading online learning and skills development company, incubated by IIT Madras and IIM Ahmedabad.</p>
   Established in 2014 and acquired by the HCL Group in 2022, GUVI is dedicated to providing effective and high-quality learning and skilling programs that transcend language barriers in technology education. GUVI today is trusted by over 3 million learners and 2000+ corporate partners.
    </div>
    <div className="content-right">
        <FontAwesomeIcon icon={faTelegram} color='#0088cc' className='icons'/>
        <FontAwesomeIcon icon={faYoutube} color='#ff0000'className='icons'/>        
        <FontAwesomeIcon icon={faInstagram} color='#e1306c'className='icons'/>
        <FontAwesomeIcon icon={faFacebook} color='#1877f2'className='icons'/>
        <FontAwesomeIcon icon={faXTwitter} color='#000000'className='icons'/>
    </div>
    </div>
    </div>
  )
}

export default Footer