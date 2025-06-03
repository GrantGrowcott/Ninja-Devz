import { useForm } from "@formspree/react";

const ContactEntry = () => {
  const [state, handleSubmit] = useForm("mldrdeyo");
  if (state.succeeded) {
    return <p>We will get back to you as soon as possible!</p>;
  }

  return (
    <main className="contact__input__container green">
      <form onSubmit={handleSubmit} action="https://formspree.io/f/mldrdeyo" method="POST" className="flex flex-col">
        <h4 className="text-[var(--white)]">
          <span className="green-text">Contact</span> Us Anytime
        </h4>
        <label htmlFor="name">Name</label>
        <input className="contact__textinput" id="name" placeholder="John Doe" type="text" name="name" required />
        <label htmlFor="phone">Phone Number</label>
        <input className="contact__textinput" id="phone" placeholder="289 123 4567" type="text" name="phone" required />
        <label htmlFor="email">Email Address</label>
        <input
          className="contact__textinput"
          id="email"
          placeholder="johndoe@gmail.com"
          type="email"
          name="email"
          required
        />
        <label className="label__input" htmlFor="message">
          Message
        </label>
        <textarea className="contact__messageinput" id="message" name="message" placeholder="How Can We Help You!!" />
        <button
          name="Submit Button"
          type="submit"
          className="mt-6 cursor-pointer text-[var(--white)] border-[var(--green)] border-4 rounded-2xl inline-block  p-6 no-underline hover:no-underline w-[50%] mx-auto"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default ContactEntry;
