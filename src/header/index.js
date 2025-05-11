import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const ICON_MAPPING = {
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
};

const Headermain = () => {
  const [isActive, setActive] = useState("false");
  const menuRef = useRef(null);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".menu__button")
      ) {
        setActive("false");
        document.body.classList.remove("ovhidden");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
            <Link className="navbar-brand nav_ac hide-portfolio" to="/portfolio">
              Portfolio
            </Link>
            <Link className="navbar-brand nav_ac hide-about" to="/about">
              About
            </Link>
            <Link className="navbar-brand nav_ac hide-profiles" to="/coding-profile">
              Profiles
            </Link>
            <Link className="navbar-brand nav_ac hide-github" to="/github">
              Github
            </Link>
            <Link className="navbar-brand nav_ac hide-contact" to="/contact">
              Contact
            </Link>

            <Themetoggle />
            <button className="menu__button nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100" ref={menuRef}>
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/" className="my-3">
                      Home
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/portfolio" className="my-3">
                      Portfolio
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/about" className="my-3">
                      About
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/coding-profile" className="my-3">
                      Profiles
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/github" className="my-3">
                      Github
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/contact" className="my-3">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
          <div className="d-flex gap-3 align-items-center social-icons">
              {["linkedin", "github", "instagram"].map((platform) => {
                const Icon = ICON_MAPPING[platform];
                return (
                  <a
                    key={platform}
                    href={socialprofils[platform]}
                    className="social-icon-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <p className="copyright m-0 text-md-end text-center w-100 w-md-auto mt-2 mt-md-0">
              Copyright @ {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
