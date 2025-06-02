import { gtag_report_conversion } from "@/helpers/helpers";

const GetStartedButton = () => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    gtag_report_conversion("https://calendly.com/admin-ninjadevz/30min");
  };

  return (
    <a
      href="https://calendly.com/admin-ninjadevz/30min"
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button type="button" name="Contact Us Button" className="touch__button">
        <h3 className="text-lg relative text-[var(--black)]">Get Started</h3>
        <div className="wave"></div>
      </button>
    </a>
  );
};

export default GetStartedButton;
