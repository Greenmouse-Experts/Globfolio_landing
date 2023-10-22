import React from 'react'
import logo from "../image/darklogo.png"
import {RiTwitterXFill, RiFacebookFill} from "react-icons/ri"
import {SiInstagram} from "react-icons/si"
import "../styles/navbar.css"

const Footer = () => {
  return (
   
    <footer>
        <div className="footer_head">
            <h2 className="h2">Ready to take your portfolio <br />
to the next level?</h2>
<a href="#d">Download the App</a>
        </div>

        <div className="footer_body">
            <div className="foot1">
                <img src={logo} alt="" />
                <div className="social">
                <RiTwitterXFill/>
                <RiFacebookFill/>
                <SiInstagram/>
                </div>
                <p>Copyright © 2023 Globfolio. All Rights Reserved</p>
            </div>
            <div className="links">
                <h4>Quick Links</h4>
                 <div>
                    <a href="#over">About</a>
                    <a href="#price">Pricing</a>
                    <a href="#faq">Faq</a>
                    <a href="#contact">Contact Us</a>
                  
                 </div>
            </div>
            <div className="links">
                <div>
                    <p></p>
                    <a href="#d">Terms and condition</a>
                    <a href="#d">Return Policy</a>
                    <a href="#d">Privacy Policy</a>
                </div>
             
            </div>
            <div className="links">
                <h4>Social</h4>
                 <div>
                    <a href="#o">Twitter</a>
                    <a href="#p">Linkedin</a>
                    <a href="#f">Instagram</a>
                    <a href="#c">Facebook</a>
                 </div>
            </div>
            <div className="news">
                <h4>Our Newsletter</h4>
                <p>Subscribe to our newsletter to 
get our news delivered to you.</p>
                <div className="divv">
                    <input type="email" placeholder='Email Address' />
                    <button>Join</button>
                </div>
            </div>
        </div>
        <div className="c_tag">
            <p>© 2023 Globfolio. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer