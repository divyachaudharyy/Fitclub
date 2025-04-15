import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header" id="header">
      <img src={Logo} alt="" className="logo" />

      {menuOpened === false && mobile === true ? (
        <div onClick={() => setMenuOpened(true)}>
          <RxHamburgerMenu className="menu" />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="exercises"
              spy={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Exercises
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              spy={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="reasons"
              spy={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              to="plans"
              spy={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Testimonials
            </Link>
          </li>

          
        </ul>
      )}
    </div>
  );
};

export default Header;
