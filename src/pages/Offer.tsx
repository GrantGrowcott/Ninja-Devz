import GetStartedButton from "@/components/GetStartedButton";
import Image from "next/image";
import ContactEntry from "@/components/ContactEntry";

const Offer = () => {
  return (
    <>
      <div className="offer__container">
        <div className="offer__container__inner">
          <h1>Book Your Free Consultation Today!!!</h1>
          <h2>
            Find out about our SEO services, Website Development and Advertisement management to boost sales for your
            business!!
          </h2>
          <GetStartedButton />
        </div>
      </div>

      <div className="values__grid">
        <div className="value__item">
          <h3>Results tailored to your needs</h3>
          <h4>We never compromise on quality. All questions are valid in our eyes</h4>
        </div>
        <div className="value__item">
          <h3>Performance Optimized Websites</h3>
          <h4>We use the fasted frameworks that make google and you happy</h4>
        </div>
        <div className="value__item">
          <h3>Custom Designs with you in mind</h3>
          <h4>Our websites are hand-coded for your business specifications. </h4>
        </div>
      </div>

      <div className="problem__container">
        <div className="problem__container__inner">
          <h4>Are you struggling to generate sales and leads for your business?</h4>
          <GetStartedButton />
        </div>
        <div className="problem__container__inner">
          <div className="problem__container__grid">
            <div className="problem__container__item">
              <h3> You do not have the time to understand complex search engine optimization</h3>
              <Image
                src="/stopwatch.png"
                alt="Stopwatch moving quickly in the wind"
                width={200}
                height={200}
                loading="lazy"
              />
            </div>
            <div className="problem__container__item">
              <h3>Your website lacks a modern feel that is limiting your business growth</h3>
              <Image src="/target-devices.png" alt="Target symbol with devices" width={200} height={200} loading="lazy" />
            </div>
            <div className="problem__container__item">
              <h3> Your website is slow and you do not understand how to fix it.</h3>
              <Image
                            src="/funnel.png"
                            alt="Converting gears into money through a funnel"
                            width={200}
                            height={200}
                            loading="lazy"
                          />
            </div>
          </div>
        </div>
      </div>

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
            development journey when I began visiting boring financial and medical websites to realize that they lacked
            the design specifications needed to draw in users. Over time, I have honed my technique to create beautiful
            deliverables where businesses show customers they are professional and happy to serve. Whether it&apos;s
            your dream mobile app, business website, or personal portfolio, we can deliver an excellent product at a
            bargain price.
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

      <div className="plan__container">
        <div className="plan__container__item">
          <h3>Step 1</h3>
          <h4>Plan</h4>
          <h5>
            {" "}
            We work with you and your team to design a custom plan based on your needs. No stone is left unturned
          </h5>
        </div>
        <div className="plan__container__item">
          <h3>Step 2</h3>
          <h4>Create</h4>
          <h5> Once you have approved the plan, our team will work efficiently to create your dream products</h5>
        </div>
        <div className="plan__container__item">
          <h3>Step 3</h3>
          <h4>Launch</h4>
          <h5> Your website is launched. We tinker in the background to ensure optimal traffic and satisfaction</h5>
        </div>
      </div>
      <div className="center__button">
        <GetStartedButton />
      </div>
      <div className="scope__phone__container ">
        <ContactEntry />
      </div>
    </>
  );
};

export default Offer;
