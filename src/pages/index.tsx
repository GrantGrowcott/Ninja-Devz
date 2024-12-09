import Products from "../components/Products";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";

interface HomeProps {
  imageUrl: string;
}
export const getServerSideProps: GetServerSideProps = async () => {
  const imageUrl =
    "https://res.cloudinary.com/dkvo68om8/image/upload/f_auto,q_auto/v1733100825/y2piqivtxjwnsp5myxvq.webp";
  return {
    props: {
      imageUrl,
      revalidate: 10,
    },
  };
};

const Home = ({ imageUrl }: HomeProps) => {
  return (
    <main>
      <NavBar />
     
        <Head>
          <title>Ninja Devz | Web Development Services | Custom Websites & Mobile Apps</title>
          <meta
            name="description"
            content="Welcome to Ninja Devz, experts in crafting performative websites for growing enterprises. We offer ReactJS-based web development services with adaptable designs, rapid load times, and performance tracking. Learn more about our mission and services."
          />
          <link rel="canonical" href="https://ninjadevz.com" />
        </Head>
      <section className="home__container">
        <div className="home__intro">
          <div className="home__description">
            <h1>
              <strong>Simple & Powerful</strong>
              <br></br>
              <strong>Websites!!</strong>
            </h1>
            <h2>
              Experts in crafting performative websites for growing enterprises!! We help you with branding, content
              creation and SEO. Operate your business stress free.
            </h2>
            <a href="https://calendly.com/admin-ninjadevz/60min">
              <button type="button" name="Contact Us Button" className="touch__button">
                <h3>Get Started</h3>
                <div className="wave"></div>
              </button>
            </a>
          </div>
          <div className="home__image">
            <Image
              className="ninja-image"
              src={imageUrl}
              alt="Ninja at a computer"
              width={464}
              height={600}
              sizes="(max-width: 450px) 150px, (max-width: 900px) 300px, 600px"
              priority
              style={{ borderRadius: "30px" }}
              loading="eager"
            />
          </div>
        </div>
      </section>
      <div className="home__outer__container">
        <section className="scope__container">
          <h3 className="centerText">Our Purpose</h3>
          <div className="scope__phone__container">
            <p>-------</p>
            <div className="scope__phone">
              <Image src="/phone.png" alt="Phone Icon" width={50} height={50} loading="lazy" />
            </div>
            <p>-------</p>
          </div>
          <h4>
            We concentrate on creating web designs for small to medium sized businesses in ReactJS. With accelerated
            processing over standard websites, more traffic will be generated for your enterprise. We can also make your
            mobile application dream come to reality through React Native.
          </h4>
        </section>
        <section className="attributes">
          <div className="attributes__container">
            <Image src="/target-devices.png" alt="Target symbol with devices" width={100} height={100} loading="lazy" />
            <div>
              <h3>Adaptable to all devices</h3>
              <h4>
                Your website is crafted to appear flawless on all devices including: personal computers, tablets and
                mobile phones
              </h4>
            </div>
          </div>
          <div className="attributes__container">
            <Image
              src="/stopwatch.png"
              alt="Stopwatch moving quickly in the wind"
              width={200}
              height={200}
              loading="lazy"
            />
            <div>
              <h3>Rapid Load Times</h3>
              <h4>
                We use a framework called ReactJS to ensure your customers aren&apos;t waiting to transfer between each
                page of your website.
              </h4>
            </div>
          </div>
          <div className="attributes__container">
            <Image
              src="/funnel.png"
              alt="Converting gears into money through a funnel"
              width={200}
              height={200}
              loading="lazy"
            />
            <div>
              <h3>Performance Tracking</h3>
              <h4>
                All websites and mobile applications will be analyzed to understand user behavior, optimize content, and
                increase conversions for your business.
              </h4>
            </div>
          </div>
        </section>
        <section className="pricing">
          <div className="piggy__container">
            <Image
              src="/piggy-bank.png"
              alt="Piggy Bank with Coins Art"
              className="piggy__image"
              width={200}
              height={200}
              loading="lazy"
            />
          </div>
          <div className="pricing__container">
            <h3>
              <b className="green-text">No initial payment </b> required, with monthly payments of{" "}
              <b className="green-text"> $200</b> for a minimum commitment of 12 months.
            </h3>
            <h4 className="line__margin">
              $0 down-payment for a standard small business website. Further pricing considerations are negotiated based
              on the complexity and time required to produce the deliverable. We can purchase the domain, SSL
              certificate, and domain. You own everything, cancel at any time!!!
            </h4>
            <div className="characteristics">
              <div className="characteristics__container">
                <div className="characteristics__inner__container">
                  <div className="check__container">
                    <Image src="/check-circle.png" alt="Check Circle Art" width={200} height={200} loading="lazy" />
                  </div>
                  <div className="characteristics__content">
                    <h3>No Additional Hosting Fees</h3>
                    <h4>Hosting of the website and domain built into the overall cost.</h4>
                  </div>
                </div>
                <div className="characteristics__inner__container">
                  <div className="check__container">
                    <Image src="/check-circle.png" alt="Check Circle Art" width={200} height={200} loading="lazy" />
                  </div>
                  <div className="characteristics__content">
                    <h3>24/7 Customer Service</h3>
                    <h4>Call directly at 905 -517-0696 for instantaneous help.</h4>
                  </div>
                </div>
                <div className="characteristics__inner__container">
                  <div className="check__container">
                    <Image src="/check-circle.png" alt="Check Circle Art" width={200} height={200} loading="lazy" />
                  </div>
                  <div className="characteristics__content">
                    <h3>Google Analytics</h3>
                    <h4>We ensure your website is prioritized in search for maximum traffic.</h4>
                  </div>
                </div>
              </div>
              <div className="characteristics__container">
                <div className="characteristics__inner__container">
                  <div className="check__container">
                    <Image src="/check-circle.png" alt="Check Circle Art" width={200} height={200} loading="lazy" />
                  </div>
                  <div className="characteristics__content">
                    <h3>Unlimited Edits</h3>
                    <h4>Request changes with no hassle and results the day of contact.</h4>
                  </div>
                </div>
                <div className="characteristics__inner__container">
                  <div className="check__container">
                    <Image src="/check-circle.png" alt="Check Circle Art" width={200} height={200} loading="lazy" />
                  </div>
                  <div className="characteristics__content">
                    <h3>Web Design and Development</h3>
                    <h4>Use of unique web designs layouts using modern web design principles</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="profile">
          <h3 className="centerText">Our Mission</h3>
          <div className="profile__phone__container">
            <p>-------</p>
            <div className="profile__phone Image ">
              <Image
                src="/grant.png"
                alt="Vector graphic of Grant (The Founder)"
                width={200}
                height={200}
                loading="lazy"
              />
            </div>
            <p>-------</p>
          </div>
          <div className="profile__description">
            <h4>
              Hello. My name is Grant Growcott and I am a mobile application developer/ web developer. I started my
              development journey when I began visiting boring financial and medical websites to realize that they
              lacked the design specifications needed to draw in users. Over time, I have honed my technique to create
              beautiful deliverables where businesses show customers they are professional and happy to serve. Whether
              it&apos;s your dream mobile app, business website, or personal portfolio, we can deliver an excellent
              product at a bargain price.
            </h4>
          </div>
          <div className="profile__image">
            <Image
              src="/profile-pic.jpg"
              alt="Grant Growcott Profile in Black and White"
              width={200}
              height={200}
              loading="lazy"
            />
          </div>
          <div className="profile__name">
            <h3>Grant Growcott</h3>
            <h4>Founder / Engineer</h4>
          </div>
        </section>
        <Products />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
