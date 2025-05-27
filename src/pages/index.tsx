import Products from "../components/Products";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import { homeFaqs } from "@/constants";
import FAQSection from "@/components/FAQSection";
import GetStartedButton from "@/components/GetStartedButton";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <NavBar />
      <Head>
        <title>Ninja Devz | Web Development Services | Custom Websites & Mobile Apps</title>
        <meta
          name="description"
          content="Welcome to Ninja Devz, experts in crafting performative websites for growing enterprises. We offer ReactJS-based web development services with adaptable designs, rapid load times, and performance tracking. Learn more about our mission and services."
        />
        <Link
          rel="canonical"
          href="https://ninjadevz.com/Blog/Legal/Must-Have-Law-Firm-Website-Features-to-Convert-Visitors-into-Clients"
        />
      </Head>
      <section className="pt-[10em] bg-[var(--black)] min-h-screen flex items-center justify-center">
        <div className="w-[73%] mx-auto flex gap-[30px]">
          <div className="flex-1 pr-5">
            <h1 className="text-2xl md:text-5xl text-[var(--green)] leading-snug">
              Crafters of engaging websites that convert visitors into customers for your business.
            </h1>
            <h2 className="text-[var(--white)] leading-10 mt-6">
              Looking for expert Hamilton web design that actually performs? We specialize in crafting high-converting
              websites for growing businesses in Hamilton. From branding and content creation to SEO, we help you
              attract customers and operate stress free. Click below for a free consultation!!!
            </h2>
            <GetStartedButton />
          </div>
        </div>
      </section>
      <div className="w-[73%] mx-auto">
        <section className="text-center">
          <h3 className=" text-[var(--green)] ">Our Purpose</h3>
          <div className="flex item-center justify-center">
            <p>-------</p>
            <div>
              <Image src="/phone.png" alt="Phone Icon" width={100} height={100} loading="lazy" />
            </div>
            <p>-------</p>
          </div>
          <h4 className="text-[var(--white)]">
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
              width={300}
              height={300}
              loading="lazy"
            />
          </div>
          <div className="pricing__container">
            <h3>
              <b className="green-text">No initial payment </b> required, with monthly payments of
              <b className="green-text"> $100</b> for a minimum commitment of 12 months.
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
                width={125}
                height={125}
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
        <FAQSection faqs={homeFaqs} textColor="white" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
