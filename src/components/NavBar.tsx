import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo-text.png";
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <span className="icon">
            <Image src={logo} alt="Ninja Devz Company Logo" />
          </span>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link href="/" className="nav-links" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/About" className="nav-links" onClick={handleClick}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/Services" className="nav-links" onClick={handleClick}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/Contact" className="nav-links" onClick={handleClick}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          {click ? (
            <span className="icon">
              <AiFillCloseCircle size={45} className="nav-color" />
            </span>
          ) : (
            <span className="icon">
              <AiOutlineMenu size={45} className="nav-color" />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
