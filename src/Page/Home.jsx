import React from "react";
import Navbar from "../components/Navbar";
import "../styles/home.css";
import home from "../image/home.png";
import { AiFillApple, AiOutlineCheck } from "react-icons/ai";
import {BiLogoPlayStore} from 'react-icons/bi'
import sar from "../image/sar.png";
import star from "../image/star.png";
import why1 from "../image/why1.png";
import why2 from "../image/why2.png";
import why3 from "../image/why3.png";
import Easy from "./Easy";
import Features from "./Features";
import Pricing from "./Pricing";
import Footer from "../components/Footer";
import { BsFillArrowRightCircleFill  } from 'react-icons/bs'

const Home = () => {
  const why = [
    {
      id: 1,
      icon: why1,
      head: "Stocks",
      title:
        "See our best stocks with huge upside potential in the Nigerian stock market.",
    },
    {
      id: 2,
      icon: why2,
      head: "Crude Oil",
      title:
        "Take advantage of the volatility and trend in the energy market with expert insights and opinions.",
    },
    {
      id: 3,
      icon: why3,
      head: "Fixed Income",
      title:
        "Protect your capital and enjoy stead returns year on year from our vetted low risk investment ideas",
    },
  ];

    // const [isPlaying, setIsPlaying] = useState(false);
    // const videoRef = useRef(null);

    // const handlePlayClick = () => {
    //   if (videoRef.current) {
    //     videoRef.current.play();
    //     setIsPlaying(true);
    //   }
    // };
  return (
    <div className="home_container">
      <Navbar />
      <div id="home" className="home">
        <div className="main">
          <div className="home_text">
            <h1> 
            <span>Trade </span>Stocks, Crude Oil <br />and <span>Invest</span> in Fixed Income Like a Pro.
             
            </h1>
            <h1 className="hid"> 
            <span>Trade </span>Stocks, Crude Oil and <span>Invest</span> in Fixed Income Like a Pro.
             
            </h1>
            <p>
            Introducing the Globfolio app-- a platform for <br /> social traders and expert recommendations.
            </p>
            <div className="download_app">
              
            <a className="download_btn" href="https://globfolio-user.netlify.app/auth/register">
               Sign Up
            </a>
            <a className="download_btn blac" href="https://globfolio-user.netlify.app/auth/login">
               Sign In <BsFillArrowRightCircleFill className="icon-sign"/>
            </a>
            
            </div>
            
            <div className="check">
              <p>
                <AiOutlineCheck /> Free 30 Days Trial
              </p>
              <p>
                <AiOutlineCheck /> Easy self-onboarding
              </p>
            </div>
            <div className="star">
              <div className="star_1 sta">
                <h3>2M</h3>
                <span>Trusted Users</span>
                <p>5/5 Rating</p>
                <img src={sar} alt="star" />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="140"
                viewBox="0 0 4 140"
                fill="none"
              >
                <path
                  opacity="0.1"
                  d="M2 1.78979L2.00001 120.79"
                  stroke="#258A22"
                />
              </svg>
              <div className="star_2 sta">
                <h3>4.7</h3>
                <img src={star} alt="" />
                <span>Rating</span>
                <p>Worldwide</p>
              </div>
            </div>
          </div>
          <div className="home_img">
            <img src={home} alt="" />
          </div>
        </div>
      </div>
      <div id="over" className="glob">
        <div className="glob_text">
          <h2>
          GlobFolio is a trusted community of traders <br /> and investors in the stocks, crude oil and <br /> fixed income market.
          </h2>

          <h2 className="hid">
          GlobFolio is a trusted community of traders and investors in the stocks, crude oil and  fixed <br />income market.
          </h2>
          <p>
          Connect with a vibrant community of like-minds like you through our <br />secured social features , share investing ideas and discuss opportunities.
          </p>
        </div>
        {/* <div className="video">
          <video ref={videoRef} controls>
            <source src="your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <div className="play-button">
              <button onClick={handlePlayClick}>Watch Video</button>
            </div>
          )}
        </div> */}
        <div className="why">
          <div className="why_text">
            <span>why GLOBFOLIO app?</span>
            <h2 className="h2">
            Simplifying the Financial<br /> Market for you..
            </h2>
            <p>
            We do a top to bottom analysis of stocks, crude oil and fixed income markets while you profit from our recommendations
            </p>
            <div className="download_app">
              <a className="download_btn bla" href="#d">
              <AiFillApple /> Download App
            </a>
            <a className="download_btn" href="#d">
              <BiLogoPlayStore /> Download App
            </a>
            
            </div>
          </div>
          <div className="why_list">
            {why.map((item)=>(

<div key={item.id} className="why_card">
<img src={item.icon} alt="" />
<div className="card_text">
  <h4>{item.head}</h4>
  <p>{item.title}</p>
</div>
</div>
            )            
            )}
          </div>
        </div>
      </div>
      <Easy/>
      <Features/>
      <Pricing/>
      <Footer/>
    </div>
  );
};

export default Home;
