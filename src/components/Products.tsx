
import { AiFillCheckCircle } from "react-icons/ai";
import ContactButton from "./ContactButton";
import { productCheckMark } from "../constants";

const Products = () => {
  return (
    <main className="product">
      <div className="product__grid">
        <div className="product__item green">
          <div className="product__title">
            <h3>E-commerce Shop</h3>
          </div>
          <ul className="list__styles">
            <li>
              <div className="list__container">
                <AiFillCheckCircle size={productCheckMark} color={"var(--green)"} />
                <p>$5,000 min. Up Front Cost</p>
              </div>
            </li>
            <li>
              <div className="list__container">
                <AiFillCheckCircle size={productCheckMark} color={"var(--green)"} />
                <p>Custom Designed</p>
              </div>
            </li>
            <li>
              <div className="list__container">
                <AiFillCheckCircle size={productCheckMark} color={"var(--green)"} />
                <p>Integration with Shopify</p>
              </div>
            </li>
            <li>
              <div className="list__container">
                <AiFillCheckCircle size={productCheckMark} color={"var(--green)"} />
                <p>Simple edits</p>
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
            
            <ul className="list__styles">
              <li>
                <div className="list__container">
                  <AiFillCheckCircle size={productCheckMark} color={"var(--green)"} width={50} height={50}/>
                  <p>Unlimited Edits</p>
                </div>
              </li>
              <li>
                <div className="list__container">
                  <AiFillCheckCircle size={productCheckMark} color={"var(--green)"} />
                  <p>Includes Hosting</p>
                </div>
              </li>
              <li>
                <div className="list__container">
                  <AiFillCheckCircle size={productCheckMark} color={"var(--green)"} />
                  <p>24/7 Customer Service</p>
                </div>
              </li>
              <li>
                <div className="list__container">
                  <AiFillCheckCircle size={productCheckMark} color={"var(--green)"} />
                  <p>Lifetime Updates</p>
                </div>
              </li>
            </ul>
            <ContactButton />
          </div>
        </div>
        <div className="product__item red">
          <div className="product__title">
            <h3>Logos and Graphic Design</h3>
          </div>
          <ul className="list__styles">
            <li>
              <div className="list__container">
                <AiFillCheckCircle size={productCheckMark} color={"var(--green)"} />
                <p>3 revisions</p>
              </div>
            </li>
            <li>
              <div className="list__container">
                <AiFillCheckCircle size={productCheckMark} color={"var(--green)"} />
                <p>All File Formats</p>
              </div>
            </li>
            <li>
              <div className="list__container">
                <AiFillCheckCircle size={productCheckMark} color={"var(--green)"} />
                <p>Animations Too</p>
              </div>
            </li>
            <li>
              <div className="list__container">
                <AiFillCheckCircle size={productCheckMark} color={"var(--green)"} />
                <p>Free w/ Subscription</p>
              </div>
            </li>
          </ul>
          <ContactButton />
        </div>
      </div>
    </main>
  );
};

export default Products;
