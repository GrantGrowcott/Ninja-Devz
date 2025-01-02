import Image from "next/image";
const Law = () => {
  return (
    <div className="law">
      <div className="law__outer__container">
        <div className="law__container">
          <div className="law__container__description ">
            <h1>Specialized SEO Services for Law Firms</h1>
            <h2></h2>
          </div>
          <div className="law__container__description__image">
            <Image
              src="/blue-law.png"
              alt="Lawyer Standing Beside a scale and a Flag in blue"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Law;
