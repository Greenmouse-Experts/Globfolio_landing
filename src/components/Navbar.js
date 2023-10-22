import React, { useState, useEffect, useRef } from "react";
import "../styles/navbar.css";
import logo from "../image/logo.png";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 40) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);



  return (
    <div className={fix ? "navbar fixed" : "navbar"}>
      <button className="nav_toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <RiCloseFill /> : <RiMenuFill />}
      </button>

      <div className="logo">
        <img src={logo} alt="Globfolio-logo" />
      </div>
      <div
        ref={dropdownRef}
        className={`nav_link ${isOpen ? "show_nav" : "hide_nav"} `}
      >
        <a onClick={toggle} onBlur={hide} onFocus={show} href="#home">
          {" "}
          Home
        </a>
        <a onClick={toggle} onBlur={hide} onFocus={show} href="#over">
          Overview
        </a>
        <a onClick={toggle} onBlur={hide} onFocus={show} href="#price">
          Pricing
        </a>
        <a onClick={toggle} onBlur={hide} onFocus={show} href="#faq">
          FAQs
        </a>

        <a
          onClick={toggle}
          onBlur={hide}
          onFocus={show}
          className="contact_tag"
          href="#contact"
        >
          Contact Us
        </a>
        <a className="come disabled-link" href="##" disabled={true}>Courses <span>Coming Soon</span></a>
        <a
          href="#h"
          className="download"
          onClick={toggle}
          onBlur={hide}
          onFocus={show}
        >
          Download App
        </a>
      </div>
    </div>
  )
};

export default Navbar;
