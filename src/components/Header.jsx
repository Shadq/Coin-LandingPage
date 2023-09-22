import React from "react";
import { Link } from "react-scroll";
import "../styles/Header.css";

const Header = () => {
  return (
    <nav>
      <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
        <h2 style={{ cursor: "pointer" }}>Stack Coin</h2>
      </Link>
      <ul>
        <li>
          <Link
            to="charts"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Charts & Infos
          </Link>
        </li>
        <li>
          <Link to="team" spy={true} smooth={true} offset={-100} duration={500}>
            Our Team
          </Link>
        </li>

        <li>
          <Link to="buy" spy={true} smooth={true} offset={-100} duration={500}>
            <button>Buy Stack</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
