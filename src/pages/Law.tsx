import Image from "next/image";
import { FaScrewdriverWrench as Wrench } from "react-icons/fa6";
import { IoDocumentText as Document } from "react-icons/io5";
import { MdLocalCafe as Cup } from "react-icons/md";
import { FaChartLine as Chart, FaBalanceScale as Scale } from "react-icons/fa";
import { SiOrganicmaps as Organic } from "react-icons/si";
import { lawIcon, blueIcon } from "@/constants";

const Law = () => {
  return (
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
              Apply for your <span className="blue-text">20% discount today</span> on our SEO Services before time runs
              out. See how we can help you generate more leads today!!
            </h3>
            <button className="law__cta__button">
              <h3>Schedule Now</h3>
            </button>
          </div>
          <div className="law__container__description__image">
            <Image
              src="/blue-law-medium.png"
              alt="Lawyer Standing Beside a scale and a Flag in blue"
              width={546}
              height={468}
              className="law__hero__image"
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
                Use of keywords related to your field creates more free traffic. More traffic will inevitably mean more
                clients.
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
      </div>
    </div>
  );
};

export default Law;
