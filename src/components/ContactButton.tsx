import { useRouter } from "next/router";
import { handleNavigation } from "@/helpers/helpers";

const ContactButton = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      className="contact__button"
      name="Contact Button"
      onClick={() => handleNavigation("/Contact", router.push)}
    >
      <h4>Contact Us</h4>
    </button>
  );
};

export default ContactButton;
