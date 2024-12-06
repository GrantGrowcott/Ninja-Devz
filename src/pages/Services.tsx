import "../css/Services.css";
import { webLayout, designIcons, computerGraphs } from "../constants";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaWheelchair, FaKey, FaGoogle } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import ContactButton from "../components/ContactButton";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Image from "next/image";


const Services = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Ninja Devz Web Development Services | Custom Websites & Mobile Apps</title>
          <meta
            name="description"
            content="Discover Ninja Devz web development services: custom websites, mobile apps, SEO optimization, graphic design, and ongoing updates. Learn more about our comprehensive solutions."
          />

          <link rel="canonical" href="https://ninjadevz.com/Services" />
        </Helmet>
      </HelmetProvider>
      <NavBar />
      <header></header>
      <main className="services">
        <div className="design__container">
          <div className="design__inner__container">
            <Image src={webLayout} alt="Web Layout Icons" />
          </div>
          <section className="logos__inner__container">
            <h1>Web Design and Mobile Applications to Perfection!!</h1>
            <h4>
              All mobile applications and websites are built in house by hand to ensure maximum customizability and
              performance. Our code will outperform the standard wordpress and framework through or meticulous research
              and understanding of code and design.
            </h4>
            <h4>
              We recognize the importance of<span className="green-text"> optimizing internet traffic </span> for
              seamless connectivity and performance, a concept often overlooked but crucial for developers.
            </h4>
          </section>
        </div>

        {/* Search Engine Section */}

        <section className="logos__container">
          <div className="logos__inner__container">
            <h3>Proficiency Through Search Engine Optimization</h3>
            <h4>
              To ensure your website is ranked highly ( and appears amongst the first pages of major search engines), we
              use a number of unique strategies to funnel traffic to your website.
            </h4>
            <p>These Techniques include:</p>
            <ul className="technique__list">
              <li>
                <div className="list__container">
                  <AiFillCheckCircle size={30} color={"var(--green)"} />
                  <p>Key Word Search</p>
                </div>
              </li>
              <li>
                <div className="list__container">
                  <AiFillCheckCircle size={30} color={"var(--green)"} />
                  <p>Google Analytics Monitoring</p>
                </div>
              </li>
              <li>
                <div className="list__container">
                  <AiFillCheckCircle size={30} color={"var(--green)"} />
                  <p>Image Optimization </p>
                </div>
              </li>
              <li>
                <div className="list__container">
                  <AiFillCheckCircle size={30} color={"var(--green)"} />
                  <p>Dynamic Tags</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="computer__container">
            <Image src={computerGraphs} alt="Computer Graphs Drawing" />
          </div>
        </section>

        <section className="logos__container">
          <div className="logos__inner__container">
            <Image src={designIcons} alt="Design Icons Drawing" />
          </div>
          <div className="logos__inner__container">
            <h3>Graphics, Animations, Logos and Design</h3>
            <h4>
              Whether you need a moving animation, new logo or touch ups of existing designs, we are dedicated to
              showing off your brand vision.
            </h4>
            <ul className="logos__list">
              <li className="list__contents">
                <div className="check_position">
                  <AiFillCheckCircle color={"var(--green)"} />
                </div>
                <div className="left-alignment">
                  <h3>Digital Artwork</h3>
                  <h4>Creation of art requires additional discussion of pricing depending on complexity and time.</h4>
                </div>
              </li>
              <li className="list__contents">
                <div className="check_position">
                  <AiFillCheckCircle color={"var(--green)"} />
                </div>
                <div className="left-alignment">
                  <h3>Animations</h3>
                  <h4>Customizable unique digital animations that are performative on all platforms</h4>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Updates Section */}

        <section className="update__container">
          <div className="update__inner__container">
            <h3>Ongoing Improvements and Updates for Your Web Presence</h3>
            <h4>
              Web and mobile development standards are constantly changes with new regulations in each jurisdiction.
              This includes proper accessibility for those with disabilities. With
              <span className="green-text"> lifetime updates</span>, we allow you to focus on what matters, your
              business.
            </h4>
          </div>
          <div className="update__inner__container">
            <div className="update__grid">
              <div className="update__item green">
                <div>
                  <MdWeb size={25} className="green-text" />
                </div>
                <h3>Design Updates</h3>
                <h4>Bored of the design we made, contact us to give it a fresh new look.</h4>
              </div>
              <div className="update__item green">
                <div>
                  <FaWheelchair size={25} className="green-text" />
                </div>
                <h3>Web Accessibility</h3>
                <h4>
                  Accommodating for those most in need. We follow WCAG guidelines to ensure your content is accessible
                  to everyone!
                </h4>
              </div>
              <div className="update__item green">
                <div>
                  <FaKey size={25} className="green-text" />
                </div>
                <h3>Search Engine Updates</h3>
                <h4>Your website will stay up to date with Google&apos;s search guidelines for ranking.</h4>
              </div>
              <div className="update__item green">
                <div>
                  <FaGoogle size={25} className="green-text" />
                </div>
                <h3>Google Business Profile</h3>
                <h4>We also help optimize and manage your Google, Bing, & Yahoo Business Profile.</h4>
              </div>
            </div>
          </div>
        </section>

        <section className="product">
          <div className="product__grid">
            <div className="product__item green">
              <div className="product__title">
                <h3>Standard + Blogging</h3>
              </div>
              <h4>Starting at</h4>
              <h5>$300-$800/MO</h5>
              <ul className="list__styles">
                <li>
                  <div className="list__container">
                    <AiFillCheckCircle size={30} color={"var(--green)"} />
                    <p>1000+ Word Post</p>
                  </div>
                </li>
                <li>
                  <div className="list__container">
                    <AiFillCheckCircle size={30} color={"var(--green)"} />
                    <p>$200 Per Extra Post</p>
                  </div>
                </li>
                <li>
                  <div className="list__container">
                    <AiFillCheckCircle size={30} color={"var(--green)"} />
                    <p>Custom Shopify Integration</p>
                  </div>
                </li>
                <li>
                  <div className="list__container">
                    <AiFillCheckCircle size={30} color={"var(--green)"} />
                    <p>Easy to edit</p>
                  </div>
                </li>
              </ul>
              <ContactButton />
            </div>
            <div className="product__item__middle green">
              <div className="product__title">
                <h3>Standard</h3>
              </div>
              <div className="product__item__middle__inner">
                <h4>Starting at</h4>
                <h5>$200-$600/Mo</h5>
                <ul className="list__styles">
                  <li>
                    <div className="list__container">
                      <AiFillCheckCircle size={30} color={"var(--green)"} />
                      <p>Unlimited Edits</p>
                    </div>
                  </li>
                  <li>
                    <div className="list__container">
                      <AiFillCheckCircle size={30} color={"var(--green)"} />
                      <p>Includes Hosting</p>
                    </div>
                  </li>
                  <li>
                    <div className="list__container">
                      <AiFillCheckCircle size={30} color={"var(--green)"} />
                      <p>24/7 Customer Service</p>
                    </div>
                  </li>
                  <li>
                    <div className="list__container">
                      <AiFillCheckCircle size={30} color={"var(--green)"} />
                      <p>Lifetime Updates</p>
                    </div>
                  </li>
                </ul>
                <ContactButton />
              </div>
            </div>
            <div className="product__item green">
              <div className="product__title">
                <h3>Logos and Graphic Design</h3>
              </div>
              <h4>Included!</h4>
              <h5>$0</h5>
              <ul className="list__styles">
                <li>
                  <div className="list__container">
                    <AiFillCheckCircle size={30} color={"var(--green)"} />
                    <p>3 revisions</p>
                  </div>
                </li>
                <li>
                  <div className="list__container">
                    <AiFillCheckCircle size={30} color={"var(--green)"} />
                    <p>All File Formats</p>
                  </div>
                </li>
                <li>
                  <div className="list__container">
                    <AiFillCheckCircle size={30} color={"var(--green)"} />
                    <p>Ready to use</p>
                  </div>
                </li>
                <li>
                  <div className="list__container">
                    <AiFillCheckCircle size={30} color={"var(--green)"} />
                    <p>Free w/ Subscription</p>
                  </div>
                </li>
              </ul>
              <ContactButton />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Services;
