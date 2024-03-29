import React from "react";
import "../styles/style.css";
import icon1 from "../image/icon1.svg";
import icon2 from "../image/icon2.svg";
import icon3 from "../image/icon3.svg";
import icon4 from "../image/icon4.svg";
import icon5 from "../image/icon5.svg";
import icon6 from "../image/icon6.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import best from "../image/mockuuups-young-lady-holding-an-iphone-12-mockup 1.png";
import { AiFillApple } from "react-icons/ai";
import {BiLogoPlayStore} from 'react-icons/bi'

const Features = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 601 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };

  const customerReviews = [
    {
      id: 1,
      rating: "★★★★★",
      rate: 4.8,
      name: "John Doe",
      body: ' "Globfolio has been a lifechanger for me as I now make 15%-20% profit on my trades" ',
      profilePic: "john-doe.jpg",
      profession:"Risk Manager"
    },
    {
      id: 2,
      rate: 4.7,
      rating: "★★★★★",
      name: "Jane Smith",
      body: ' "Ive been using this service for a while, and it has completely transformed my trading strategy. Highly recommended!" ',
      profilePic: "jane-smith.jpg",
      profession: "Crypto Investor",
    },{
      id: 3,
      rate: 4.8,
      rating: "★★★★★",
      name: "Bob Williams",
      body: ' "I am so impressed with this platform. It has made a huge difference in my trading performance." ',
      profilePic: "jane-smith.jpg",
      profession: "Commodity Analyst",
    },
    {
      id: 4,
      rate: 4.5,
      rating: "★★★★★",
      name: "Alice Johnson",
      body: ' "Globfolio has been a lifechanger for me as I now make 15%-20% profit on my trades" ',
      profilePic: "jane-smith.jpg",
      profession: "Stock Trader",

    },
    
  ];

  const feat = [
    {
      icon: icon1,
      head: "Secured Login",
      body: "Globfolio makes use of more than one verification method in users’ authentication to secure users credentials",
    },
    {
      icon: icon2,
      head: "Personalized Dashboard",
      body: "Each user gets access to a private and personalized dashboard to control all their activities on Globfolio ",
    },
    {
      icon: icon3,
      head: "Investors' Community",
      body: "Globfolio provides rooms and community for user to interact with professionals, investors and like-minds",
    },
    {
      icon: icon4,
      head: "Connection and Socialization",
      body: "Our social features lets you join a chatroom, share ideas and discuss the hottest stocks, crude oil trend and fixed income opportunities.",
    },
    {
      icon: icon5,
      head: "Professional Picks and Recommendations",
      body: "We do a top to bottom analysis of stocks, crude oil and fixed income markets while you profit from our recommendations.",
    },
    {
      icon: icon6,
      head: "Seamless Account Setup",
      body: "It takes less than a minute to sign up, subscribe to GlobFolio app platform and enjoy seamless access to premium features",
    },
  ];

  // const settings = {
  //   centerMode: true, // Enable center mode
  //   centerPadding: "20px",
  //   dots: true, // Show dots for navigation
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2.85,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   responsive: [
  //     {
  //       breakpoint: 1421,
  //       settings: {
  //         slidesToShow: 2.5,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 1201,
  //       settings: {
  //         slidesToShow: 2.2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 960,
  //       settings: {
  //         slidesToShow: 1.5,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <div className="main_body">
      <div className="features">
        <h2 className="h2">
          Checkout other exclusive <br />
          features of Globfolio App
        </h2>
        <div className="feature">
          {feat.map((item) => (
            <div className="feature_card">
              <img src={item.icon} alt="" />
              <h4>{item.head}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
        <div className="ta">
          <a href="#price">
            See Our Pricing{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="27"
              viewBox="0 0 19 27"
              fill="none"
            >
              <path
                d="M15.9845 13.7068L10.922 18.7693C10.7635 18.9278 10.5485 19.0168 10.3243 19.0168C10.1001 19.0168 9.88516 18.9278 9.72665 18.7693C9.56814 18.6107 9.4791 18.3958 9.4791 18.1716C9.4791 17.9474 9.56814 17.7325 9.72665 17.5739L13.3484 13.9536H3.01251C2.78874 13.9536 2.57412 13.8647 2.41589 13.7064C2.25766 13.5482 2.16876 13.3336 2.16876 13.1098C2.16876 12.886 2.25766 12.6714 2.41589 12.5132C2.57412 12.3549 2.78874 12.2661 3.01251 12.2661H13.3484L9.72806 8.64355C9.56955 8.48505 9.4805 8.27006 9.4805 8.0459C9.4805 7.82173 9.56955 7.60675 9.72806 7.44824C9.88657 7.28973 10.1016 7.20068 10.3257 7.20068C10.5499 7.20068 10.7649 7.28973 10.9234 7.44824L15.9859 12.5107C16.0645 12.5892 16.1269 12.6825 16.1695 12.7852C16.212 12.8878 16.2338 12.9979 16.2337 13.109C16.2336 13.2202 16.2115 13.3302 16.1687 13.4328C16.1259 13.5353 16.0633 13.6284 15.9845 13.7068Z"
                fill="#1F2348"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="reviews">
        <h2 className="h2">Customer Reviews</h2>
        <p>Keep tabs on your finance journey with us</p>

        <div className="customer-review-slider">
          <Carousel  responsive={responsive}>
            {customerReviews.map((review, index) => (
              <div
                key={review.id}
                className={`customer-review-item review-${index}`}
              >
                <div className="">
                  <div className={`star-rating review-${index}`}>
                    {review.rating} <span>{review.rate}</span>
                  </div>
                  <p className="pp">{review.body}</p>
                  <div className="name">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                    >
                      <circle cx="26" cy="26" r="26" fill="#D9D9D9" />
                    </svg>{" "}
                    <p>
                      {" "}
                      {review.name} <span>{review.profession}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
         </Carousel>
        </div>
      </div>

      <div className="best">
        <div className="best_img">
          <img src={best} alt="" />
        </div>
        <div className="best_text">
          <h4>STOCKS SIMPLIFIED</h4>
          <h2 className="h2">
            The Best Stock <br /> Advisory App for 2023
          </h2>
          <p>
          Globfolio has surpassed all odds, becoming the number one a for social traders and stock enthusiasts globally.
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
      </div>
    </div>
  );
};

export default Features;
