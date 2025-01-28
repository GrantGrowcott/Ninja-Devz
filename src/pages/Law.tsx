import Image from "next/image";
import { FaScrewdriverWrench as Wrench } from "react-icons/fa6";
import { IoDocumentText as Document } from "react-icons/io5";
import { MdLocalCafe as Cup } from "react-icons/md";
import { FaChartLine as Chart, FaBalanceScale as Scale } from "react-icons/fa";
import { SiOrganicmaps as Organic } from "react-icons/si";
import { lawIcon, blueIcon, faqs } from "@/constants";
import ScheduleNow from "@/components/ScheduleNow";
import ContactLaw from "@/components/ContactLaw";
import FAQSection from "@/components/FAQSection";
import OfferTime from "@/components/OfferTime";
import Head from "next/head";


const Law = () => {
  return (
    <>
      <Head>
        <title>SEO & Web Development for Law Firms | Increase Clients & Boost Visibility</title>
        <meta
          name="description"
          content="Boost your law firm's online presence with Ninja Devz's specialized SEO and web development services. From technical and local SEO to scalable web solutions, we help you dominate your local market, attract more clients, and establish your firm as an authority. Contact us today for a 20% discount!"
        />
        <link
          rel="canonical"
          href="https://ninjadevz.com/Blog/Legal/Must-Have-Law-Firm-Website-Features-to-Convert-Visitors-into-Clients"
        />
      </Head>
      <OfferTime />
      <div className="law">
        <div className="law__outer__container">
          <div className="law__container">
            <div className="law__container__description ">
              <h1>Dominate Your Local Market: Specialized SEO Services for Law Firms</h1>
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
              <h3>What We Offer To Your Firm</h3>
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
                  Using keywords related to your field generates more organic traffic, which you don&apos;t have to pay
                  for. Increased traffic will naturally lead to more clients.
                </h4>
              </div>
              <div className="features__grid__item">
                <Cup size={lawIcon} color={blueIcon} />
                <h3>Local SEO</h3>
                <h4>
                  By researching your local area, we identify the specific needs of your potential clients and ensure
                  they can easily find you, helping your law firm rank higher in search results.
                </h4>
              </div>
              <div className="features__grid__item">
                <Chart size={lawIcon} color={blueIcon} />
                <h3>Performance Tracking</h3>
                <h4>
                  By tracking key metrics on who visits your website, we gain insights to better tailor your services to
                  meet clients&apos; needs. This data-driven approach also helps optimize your marketing strategies,
                  ensuring more effective client acquisition and retention.
                </h4>
              </div>
              <div className="features__grid__item">
                <Organic size={lawIcon} color={blueIcon} />
                <h3>Organic Content</h3>
                <h4>
                  A comprehensive plan is developed for long-term organic content creation, building credibility and
                  establishing your firm as a trusted authority in the legal field.
                </h4>
              </div>
              <div className="features__grid__item">
                <Scale size={lawIcon} color={blueIcon} />
                <h3>Scalable Solutions </h3>
                <h4>
                  We utilize the best web frameworks to ensure your site is optimized for scalability, allowing your
                  firm to grow and adapt as your business evolves.
                </h4>
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
              <h3>What We Offer To Your Firm</h3>
            </div>
            <div className="process__steps">
              <Image src="/step-one.png" width={300} height={300} alt="First process step of SEO" />
              <Image src="/step-two.png" width={300} height={300} alt="Second process step of SEO" />
              <Image src="/step-three.png" width={300} height={300} alt="Third process step of SEO" />
              <Image src="/step-four.png" width={300} height={300} alt="Fourth process step of SEO" />
            </div>
          </div>
          <FAQSection faqs={faqs} textColor="black" />
          <div className="process__title__container">
            <Image src="/list.svg" alt="Blue List " width={50} height={50} />
            <h3 className="blue-text">Contact</h3>
          </div>
          <div className="process__offering">
            <h3>How Can We Help You</h3>
          </div>
          <div className="padding__container">
            <ContactLaw />
          </div>
        </div>
      </div>
    </>
  );
};

export default Law;
