import React from "react";
import Navbar from "../components/Navbar";
import "../styles/home.css";
import home from "../image/home.png";
import { AiFillApple, AiOutlineCheck } from "react-icons/ai";
import sar from "../image/sar.png";
import star from "../image/star.png";
import why1 from "../image/why1.png";
import why2 from "../image/why2.png";
import why3 from "../image/why3.png";
import Easy from "./Easy";
import Features from "./Features";
import Pricing from "./Pricing";
import Footer from "../components/Footer";

const Home = () => {
  const why = [
    {
      id: 1,
      icon: why1,
      head: "Get Stock Advisories",
      title:
        "Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Phasellus sed fermentum metus",
    },
    {
      id: 2,
      icon: why2,
      head: "Get Stock Advisories",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed fermentum metus",
    },
    {
      id: 3,
      icon: why3,
      head: "Get Stock Advisories",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed fermentum metus",
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
              Trade and <br /> <span>Invest</span> like a pro
            </h1>
            <p>
              Introducing Globfolio App — Ultimate trade and <br />
              investment advisory app.
            </p>
            <a className="download_btn" href="#d">
              <AiFillApple /> Download App
            </a>
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
            Globfolio is one of the best <br /> new traders app in Nigeria
          </h2>
          <p>
            Connect with a vibrant community of like-mind enthusiasts through{" "}
            <br />
            Globfolio’s social features. Share your achievements, exchange tips
            and <br />
            advice, and find inspiration.
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
              Simplifying the Stock <br /> Market for you..
            </h2>
            <p>
              Connect with a vibrant community of investment 
              enthusiasts through Globfolio's social features. 
              Share your achievements, exchange tips and 
              advice, and find inspiration.
            </p>
            <a className="download_btn" href="#d">
              <AiFillApple /> Download App
            </a>
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
