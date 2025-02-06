import Image from "next/image";
const OurAgreement = () => {
  return (
    <div className="our__agreement">
      <h3>Our Agreement</h3>
      <div className="agreement__grid">
        <div className="agreement__item">
          <Image src="/smile.png" width={100} height={100} alt="Smile Face Digital Art" />
          <h3>100% Satisfaction Guaranteed</h3>
          <h4>We offer unlimited revisions until you’re happy.</h4>
        </div>
        <div className="agreement__item">
          <Image src="/90.png" width={100} height={100} alt="Smile Face Digital Art" />
          <h3>Page Speed Guarantee</h3>
          <h4>We ensure a Google PageSpeed score of 90+, or we keep optimizing for free.</h4>
        </div>
        <div className="agreement__item">
          <Image src="/seo.png" width={100} height={100} alt="Smile Face Digital Art" />
          <h3>SEO-Optimized by Default</h3>
          <h4>We guarantee every site is built with fundamental on-page SEO best practices. </h4>
        </div>
        <div className="agreement__item">
          <Image src="/wrench.png" width={100} height={100} alt="Smile Face Digital Art" />
          <h3>Fast Fixes Guarantee</h3>
          <h4>Any website issue gets resolved within 24 hours.</h4>
        </div>
      </div>
    </div>
  );
};

export default OurAgreement;
