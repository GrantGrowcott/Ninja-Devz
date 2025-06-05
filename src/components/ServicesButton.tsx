import { useRouter } from "next/router";

const ServicesButton = () => {
  const router = useRouter();
  return (
    <div className="mt-24 flex items-center justify-center">
      <button name="Services Button" type="button" onClick={() => router.push("/Services")} className="text-[var(--white)] border-[var(--green)] border-3 p-3 rounded-2xl cursor-pointer">
        <h3>Our Services</h3>
      </button>
    </div>
  );
};

export default ServicesButton;
