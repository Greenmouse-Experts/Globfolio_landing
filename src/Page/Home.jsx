import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/home.css'
import home from "../image/home.png"
import {AiFillApple, AiOutlineCheck} from "react-icons/ai"
import sar from "../image/sar.png"
import star from "../image/star.png"

const Home = () => {
  return (
    <div className="home_container">
      <Navbar/>
        <div className="home">
          <div className="main">
            <div className="home_text">
            <h1>Trade and <span>Invest</span> like a pro</h1>
            <p>Introducing Globfolio App — Ultimate trade and investment advisory app.</p>
            <a href="#d"><AiFillApple/> Download App</a>
            <div className="check">
              <p><AiOutlineCheck/> Free 30 Days Trial</p>
            <p><AiOutlineCheck/> Easy self-onboarding</p>
            </div>
            <div className="star">
              <div className="star_1 sta"><h3>2M</h3>
                <span>Trusted Users</span>
                <p>5/5 Rating</p>
                <img src={sar} alt="star" />
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="4" height="123" viewBox="0 0 4 123" fill="none">
  <path opacity="0.1" d="M2 1.78979L2.00001 120.79" stroke="#258A22"/>
</svg>
              <div className="star_2 sta">
                <h3>4.7</h3>
              <img src={star} alt="" />
                <span>Rating</span>
                <p>Worldwide</p>
                
              </div>
            </div>
            </div>
          <div className="home_img"><img src={home} alt="" /></div>      


          </div>
              
        </div>
    </div>
   )
}

export default Home