import { useRouter } from "next/router";

const ServicesButton = () => {
  const router = useRouter();
  return (
    <div className="contact__us">
      <button name="Services Button" type="button" onClick={() => router.push("/Services")}>
        <h3>Our Services</h3>
      </button>
    </div>
  );
};

export default ServicesButton;
