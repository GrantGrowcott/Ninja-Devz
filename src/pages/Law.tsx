import Image from "next/image";
import { FaScrewdriverWrench as Wrench } from "react-icons/fa6";
import { IoDocumentText as Document } from "react-icons/io5";
import { MdLocalCafe as Cup } from "react-icons/md";
import { FaChartLine as Chart, FaBalanceScale as Scale } from "react-icons/fa";
import { SiOrganicmaps as Organic } from "react-icons/si";
import { lawIcon, blueIcon } from "@/constants";
import ScheduleNow from "@/components/ScheduleNow";
import ContactLaw from "@/components/ContactLaw";
import FAQSection from "@/components/FAQSection";
import OfferTime from "@/components/OfferTime";
import { faqs } from "@/constants";

const isWhitePage = true

const Law = () => {
  return (
    <>
      <OfferTime />
      <div className="law">
        <div className="law__outer__container">
          <div className="law__container">
            <div className="law__container__description ">
              <h1>Specialized SEO Services for Law Firms</h1>
              <ul className="law__list">
                <li>
                  <Image src="/blue-check.png" alt="blue check mark" width={50} height={50} />
                  <h2>Acquire clients with ease</h2>
                </li>
                <li>
                  <Image src="/blue-check.png" alt="blue check mark" width={50} height={50} />
                  <h2>Increase online visibility</h2>
                </li>
                <li>
                  <Image src="/blue-check.png" alt="blue check mark" width={50} height={50} />
                  <h2>Client focused contents</h2>
                </li>
              </ul>
              <h3>
                Apply for your <span className="blue-text">20% discount today</span> on our SEO Services before time
                runs out. See how we can help you generate more leads today!!
              </h3>
              <ScheduleNow />
            </div>
            <div className="law__container__description__image">
              <Image
                src="/blue-law-medium.png"
                alt="Lawyer Standing Beside a scale and a Flag in blue"
                width={546}
                height={468}
                className="law__hero__image"
                priority={true}
              />
            </div>
          </div>
          {/* Features Section */}
          <div className="features">
            <div className="features__title__container">
              <Image src="/blue-handshake.png" alt="Shaking hands in blue" width={50} height={50} />
              <h3>Features</h3>
            </div>
            <div className="features__offering">
              <h3>What we Offer to Your Firm</h3>
            </div>
            <div className="features__grid">
              <div className="features__grid__item">
                <Wrench size={lawIcon} color={blueIcon} />
                <h3>Technical SEO</h3>
                <h4>
                  We work behind the scenes to ensure your website loads as quickly as possible. Faster load times means
                  clients stay longer on your website.
                </h4>
              </div>
              <div className="features__grid__item">
                <Document size={lawIcon} color={blueIcon} />
                <h3>On-Page SEO</h3>
                <h4>
                  Use of keywords related to your field creates more free traffic. More traffic will inevitably mean
                  more clients.
                </h4>
              </div>
              <div className="features__grid__item">
                <Cup size={lawIcon} color={blueIcon} />
                <h3>Local SEO</h3>
                <h4>Through researching your local area, we find out the specific needs of your potential clients.</h4>
              </div>
              <div className="features__grid__item">
                <Chart size={lawIcon} color={blueIcon} />
                <h3>Performance Tracking</h3>
                <h4>
                  By tracking key metrics on who comes to your website, we will better understand how to help get your
                  clients what they need.
                </h4>
              </div>
              <div className="features__grid__item">
                <Organic size={lawIcon} color={blueIcon} />
                <h3>Organic Content</h3>
                <h4>
                  A comprehensive plan is created for long-term content creation that will generate credibility for your
                  firm.
                </h4>
              </div>
              <div className="features__grid__item">
                <Scale size={lawIcon} color={blueIcon} />
                <h3>Scalability</h3>
                <h4>We use only the best web frameworks to ensure you are organized to scale to new heights.</h4>
              </div>
            </div>
          </div>

          <div className="statistics">
            <div className="statistics__container">
              <ul>
                <li>
                  <h3>
                    Organic Search and Local Drive <span className="blue-text">69%</span> of Digital Traffic{" "}
                  </h3>
                </li>
                <li>
                  <h3>
                    <span className="blue-text">80% </span>of consumers go online multiple times weekly to find local
                    businesses.{" "}
                  </h3>
                </li>
              </ul>
              <ScheduleNow />
            </div>
            <div className="statistics__container__image">
              <Image
                src="/phone-person.svg"
                alt="Art of person standing beside a large phone with a bar graph"
                width={539}
                height={479}
                className="statistics__image"
              />
            </div>
          </div>
          <section className="law__profile">
            <h3 className="black__center__text">Our Mission</h3>
            <div className="law__profile__phone__container">
              <p>-------</p>
              <div className="law__profile__phone Image ">
                <Image
                  src="/grant-blue.png"
                  alt="Vector graphic of Grant (The Founder)"
                  width={125}
                  height={125}
                  loading="lazy"
                />
              </div>
              <p>-------</p>
            </div>
            <div className="law__profile__description">
              <h4>
                Hello. My name is Grant Growcott and I am a mobile application developer/ web developer. I started my
                development journey when I began visiting boring financial and medical websites to realize that they
                lacked the design specifications needed to draw in users. Over time, I have honed my technique to create
                beautiful deliverables where businesses show customers they are professional and happy to serve. Whether
                it&apos;s your dream mobile app, business website, or personal portfolio, we can deliver an excellent
                product at a bargain price.
              </h4>
            </div>
            <div className="law__profile__image">
              <Image
                src="/profile-pic.jpg"
                alt="Grant Growcott Profile in Black and White"
                width={200}
                height={200}
                loading="lazy"
              />
            </div>
            <div className="law__profile__name">
              <h3>Grant Growcott</h3>
              <h4>Founder / Engineer</h4>
            </div>
          </section>

          <div className="process">
            <div className="process__title__container">
              <Image src="/blue-handshake.png" alt="Shaking hands in blue" width={50} height={50} />
              <h3>Process</h3>
            </div>
            <div className="process__offering">
              <h3>What we Offer to Your Firm</h3>
            </div>
            <div className="process__steps">
              <Image src="/step-one.png" width={300} height={300} alt="First process step of SEO" />
              <Image src="/step-two.png" width={300} height={300} alt="Second process step of SEO" />
              <Image src="/step-three.png" width={300} height={300} alt="Third process step of SEO" />
              <Image src="/step-four.png" width={300} height={300} alt="Fourth process step of SEO" />
            </div>
          </div>
          <FAQSection faqs={faqs} textColor={isWhitePage ? "black" : "white"} />
          <div className="padding__container">
            <ContactLaw  />
          </div>
        </div>
      </div>
    </>
  );
};

export default Law;
