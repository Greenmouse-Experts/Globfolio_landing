import React from "react";
import easy1 from "../image/easy1.png";
import easy2 from "../image/easy2.png";
import easy3 from "../image/easy3.png";
import img1 from "../image/1.png";
import img2 from "../image/2.png";
import img3 from "../image/3.png";
import img4 from "../image/4.png";
import img5 from "../image/5.png";
import img6 from "../image/6.png";
import { AiOutlineCheck } from "react-icons/ai";

const Easy = () => {
  return (
    <div className="easy">
      <div className="easy_1">
        <img src={easy1} alt="" />
        <div className="easy_text">
          <span>EASY SETUP methods</span>
          <h2 className="h2">
            Seamless account <br />
            setup and onboarding
          </h2>
          <p>
          It takes less than a minute to sign up, subscribe to <br />GlobFolio app platform and enjoy seamless access <br /> to premium features
          </p>
          <div className="text_body">
            <p>
              <img src={img1} alt="" /> Analyst Picks & Recommendations
            </p>
            <p>
              {" "}
              <img src={img2} alt="" /> Join Chatrooms
            </p>
            <p>
              <img src={img3} alt="" /> Grow Your Portfolio
            </p>
            <p>
              <img src={img4} alt="" /> Top Support Servcies
            </p>
            <p>
              <img src={img5} alt="" /> Push Notifications
            </p>
            <p>
              <img src={img6} alt="" /> Market News & Updates
            </p>
          </div>
        </div>
      </div>
      <div className="easy_2">
        <div className="easy_text">
          {" "}
          <span>EASY FUND TRACKING</span>
          <h2 className="h2">
          Early alerts on stocks to <br /> buy before they move
          </h2>
          <p>
          Our rare insights and analysis shows you the best <br /> local and international stocks to buy before <br /> they actually move.
          </p>
          <div className="body">
            <p>
              <AiOutlineCheck /> Real-time market trend
            </p>
            <p>
              <AiOutlineCheck /> Hottest stocks/ETFs to buy
            </p>
            <p>
              <AiOutlineCheck /> Group discussions.
            </p>
          </div>
        </div>
        <img src={easy2} alt="" />
      </div>
      <div className="easy_1">
        <img src={easy3} alt="" />
        <div className="easy_text">
          {" "}
          <span>pay anywhere, anytime</span>
          <h2 className="h2">
            Easily connect <br /> with other traders
          </h2>
          <p>
          Our social features lets you join a chatroom, share <br /> ideas and discuss the hottest stocks, crude oil <br /> trend and fixed income opportunities.
          </p>
          <div className="bod">
            <div>
              <h2 className="h2">2M+</h2> <span>Members Worldwide</span>
            </div>
            <div>
              <h2 className="h2">23%</h2> <span>Increased Users</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Easy;
