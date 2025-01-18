import { gtag_report_conversion } from "@/helpers/helpers";
const ScheduleNow = () => {
  return (
    <a
      href="https://calendly.com/admin-ninjadevz/60min"
      onClick={(event) => {
        event.preventDefault();
        gtag_report_conversion("https://calendly.com/admin-ninjadevz/60min");
      }}
    >
      <button className="law__cta__button">
        <h4>Contact Now</h4>
      </button>
    </a>
  );
};

export default ScheduleNow;
