import ContactEntry from "@/components/ContactEntry";
import { useRouter } from "next/router";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";

const About = () => {
  const router = useRouter();
  return (
    <>
        <Head>
          <title>About Ninja Devz | Web Development Services</title>
          <meta
            name="description"
            content="Learn about Ninja Devz, experts in web development services. Discover our mission, unique approach, and commitment to quality."
          />
          <link rel="canonical" href="https://ninjadevz.com/About" />
        </Head>
      <header></header>
      <NavBar />
      <main className="about">
        <section className="about__container">
          <div className="about__container__image">
            <Image
              src="/profile-pic.jpg"
              alt="Grant Growcott Profile in Black and White"
              width={300}
              height={300}
              loading="lazy"
              className="about__container__image"
            />
          </div>
          <div className="about__container__description">
            <h1>Ninja Devz</h1>
            <h2>Helping to make the world a better place through design</h2>
            <h3>
              My name is Grant Growcott, I am the lead software engineer at Ninja Devz. As a natural problem solver, I
              always look at business websites and think that I can make changes for the better. Coming from a medical
              background, I bring the customer care necessary to understand the needs of each person looking to build a
              mobile application or website. After dedicating years to refining my engineering abilities, I&apos;ve
              mastered a highly effective method that excels in producing outstanding web experiences and applications.
            </h3>
          </div>
        </section>
        <div className="topper">
          <h3 className="topper__container">
            <b className="green-text"> Results </b> Are <b className="green-text">Guaranteed</b>
          </h3>
          <h4>
            We will create a well structured plan and work continuously until we meet your expectations. No project is
            considered satisfactory when working with us !!!
          </h4>
        </div>

        <section className="numbers">
          <div className="numbers__container">
            <Image src="/one.png" alt="Number One" width={50} height={50} loading="lazy" />
            <h3>Hand Written Content</h3>
            <h4>All code is unique to your project to showcase your needs.</h4>
          </div>
          <div className="numbers__container">
            <Image src="/two.png" alt="Number Two" width={50} height={50} loading="lazy" />
            <h3>Attentive to All Needs</h3>
            <h4>We answer to you by email and phone at all hours of the day.</h4>
          </div>
          <div className="numbers__container">
            <Image src="/three.png" alt="Number Three" width={50} height={50} loading="lazy" />
            <h3>Unlimited Edits</h3>
            <h4>We can make anything that you can think of. You are only limited by your imagination.</h4>
          </div>
        </section>
        <div className="contact__us">
          <button name="Services Button" type="button" onClick={() => router.push("/Services")}>
            <h3>Our Services</h3>
          </button>
        </div>
        <div className="contact">
          <address className="contact__container">
            <div className="contact__inner__container">
              <div>
              <Image src="/phone.png" alt="Phone Outline" width={50} height={50} loading="lazy" />
              </div>
              <div>
                <h4>Phone:</h4>
                <h4>(905) 517-0696</h4>
              </div>
            </div>
            <div className="contact__inner__container">
              <div>
              <Image src="/mail.png" alt="Mail Icon" width={50} height={50} loading="lazy" />
              </div>
              <div>
                <h4>Mail:</h4>
                <h4>admin@ninjadevz.com</h4>
              </div>
            </div>
          </address>
          <div className="contact__container">
            <ContactEntry />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default About;
