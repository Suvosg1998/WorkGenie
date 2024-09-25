import React from 'react'
import "./Footer.css"
import { FaStar } from 'react-icons/fa'
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
    <div className="footer">
      <div className="foot-logo">Work Genie<FaStar id='star'/></div>
      <div className="foot">
        <ul>
          <li><b>For Job Seekers</b></li>
          <li><a href="/jobs">Jobs</a></li>
          <li><a href="/allprofile">freelancers</a></li>
          <li><a href="#">Companies</a></li>
        </ul>
      </div>
      <div className="foot">
      <ul>
          <li><b>Company</b></li>
          <li><a href="/about"> About Us</a></li>
          <li><a href="/registration">Join Us</a></li>
          <li><a href="/contact">Contact us</a></li>
        </ul>
      </div>
      <div className="foot-icons">
      <FaFacebookSquare className='icons'/>
      <IoLogoLinkedin className='icons'/>
      <FaTwitterSquare className='icons'/>
      <FaInstagramSquare className='icons'/>
      </div>
    </div>
    <hr />
    <div className="foot2">
    <div className="sec1">
      <a href="/login">Account</a>
      <a href="">Support</a>
      <a href="">Mentoring</a>
    </div>
    <div className="sec2">
      <p>Copyright <FaRegCopyright /> 2024 WorkGenie</p>
    </div>
    <div className="sec3">
      <a href="">User Agreement</a>
      <a href="">Privacy policy</a>
    </div>
  </div>
  </div>
  )
}

export default Footer
