import React from "react";
import Link from "next/link";
import Image from "next/image";

const Custom404: React.FC = () => {
  return (
    <div style={{ textAlign: "center", paddingTop: "20px", backgroundColor: "#FFFFFF" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div style={{ maxWidth: "60%", margin: "0 auto", paddingBottom: "2em" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "1em" }}>Oops! We lost this page! 404 Error</h1>
          <p style={{ lineHeight: "1.5" }}>We searched high and low and couldn&apos;t find a better place for you to go.</p>
          <p style={{ lineHeight: "1.5" }}>Maybe try checking the URL or going back to our</p>
          <button
            style={{
              backgroundColor: "#2bbb35",
              padding: "1em 1.7em",
              borderRadius: "30px",
              border: "none",
              cursor: "pointer",
              borderWidth: "0.5mm",
              borderStyle: "solid",
              borderColor: "black",
              textDecoration: "none",
            }}
          >
            <Link href="/">
              <a style={{ color: "#000000", textDecoration: "none", fontWeight: "bold" }}>Home Page</a>
            </Link>
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="../../public/logo-text.png"
            alt="Ninja confused"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Custom404;
