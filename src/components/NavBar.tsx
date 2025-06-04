import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/white-logo-text.png";
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <Link href="/">
            <span>
              <Image src={logo} alt="Ninja Devz Company Logo" width={190} height={70} />
            </span>
          </Link>
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
          <li className="nav-item">
            <Link href="/Blog" className="nav-links" onClick={handleClick}>
              Blog
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
