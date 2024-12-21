import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo-text.png";

const Custom404: React.FC = () => {
  return (
    <div className="error__container">
      <div className="error__container__inner">
        <h1>Oops! We lost this page! 404 Error</h1>
        <p>We searched high and low and couldn&apos;t find a better place for you to go.</p>
        <p>Maybe try checking the URL or going back to our</p>
        <button>
          <Link href="/">
            <a>Home Page</a>
          </Link>
        </button>
      </div>
      <div className="logo__container">
        <Image src={logo} alt="Ninja confused" style={{ width: "190px", height: "70px" }} />
      </div>
    </div>
  );
};

export default Custom404;
