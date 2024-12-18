import { gtag_report_conversion } from "@/helpers/helpers";

const GetStartedButton = () => {
  return (
    <a
      href="https://calendly.com/admin-ninjadevz/60min"
      onClick={(event) => {
        event.preventDefault();
        gtag_report_conversion("https://calendly.com/admin-ninjadevz/60min");
      }}
    >
      <button type="button" name="Contact Us Button" className="touch__button">
        <h3>Get Started</h3>
        <div className="wave"></div>
      </button>
    </a>
  );
};

export default GetStartedButton;
