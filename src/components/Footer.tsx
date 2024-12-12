import logo from "../../public/logo-text.png";
import { handleNavigation } from "@/helpers/helpers";
import { useRouter } from "next/router";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <footer className="footer">
        <address className="footer__container">
          <Image src={logo} alt="Ninja Devz Logo" width={190} height={70} />
          <h4>admin@ninjadevz.com</h4>
          <h4>(905)517-0696</h4>
        </address>
        <div className="footer__container">
          <div className="footer__title">
            <h4>Pages</h4>
          </div>
          <ul className="footer__list">
            <li>
              <button
                type="button"
                name="Home Button"
                onClick={() => handleNavigation("/", router.push)}
                className="footer__button"
              >
                <h4>Home</h4>
              </button>
            </li>
            <li>
              <button
                name="About Button"
                type="button"
                onClick={() => handleNavigation("/About", router.push)}
                className="footer__button"
              >
                <h4>About</h4>
              </button>
            </li>
            <li>
              <button
                name="Services Button"
                type="button"
                onClick={() => handleNavigation("/Services", router.push)}
                className="footer__button"
              >
                <h4>Services</h4>
              </button>
            </li>
            <li>
              <button
                name="Contact Button"
                type="button"
                onClick={() => handleNavigation("/Contact", router.push)}
                className="footer__button"
              >
                <h4>Contact</h4>
              </button>
            </li>
          </ul>
        </div>
        <div className="footer__container">
          <div className="footer__title">
            <h4>Products</h4>
          </div>
          <ul className="footer__list">
            <li>
              <button className="no__styles">
                <h4>Web Design</h4>
              </button>
            </li>
            <li>
              <button className="no__styles">
                <h4>Website Upkeep</h4>
              </button>
            </li>
            <li>
              <button className="no__styles">
                <h4>SEO Services</h4>
              </button>
            </li>
            <li>
              <button className="no__styles">
                <h4>Mobile App Development</h4>
              </button>
            </li>
          </ul>
        </div>
      </footer>
      <div className="footer__copywright">
        <h4>
          <small> Copyright © 2024 | Ninja Devz | All Rights Reserved</small>
        </h4>
      </div>
    </>
  );
};

export default Footer;
