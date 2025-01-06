import { useForm } from "@formspree/react";
const ContactLaw = () => {
  const [state, handleSubmit] = useForm("mldrdeyo");
  if (state.succeeded) {
    return <p>We will get back to you as soon as possible!</p>;
  }
  return (
    <main className="law__input__container blue">
      <form onSubmit={handleSubmit} action="https://formspree.io/f/mldrdeyo" method="POST">
        <h4>
          <span className="blue-text">Contact</span> Us Anytime
        </h4>
        <label htmlFor="name">Name</label>
        <input className="law__textinput" id="name" placeholder="John Doe" type="text" name="name" required />
        <label htmlFor="phone">Phone Number</label>
        <input className="law__textinput" id="phone" placeholder="289 123 4567" type="text" name="phone" required />
        <label htmlFor="email">Email Address</label>
        <input
          className="law__textinput"
          id="email"
          placeholder="johndoe@gmail.com"
          type="email"
          name="email"
          required
        />
        <label className="label__input" htmlFor="message">
          Message
        </label>
        <textarea className="law__messageinput" id="message" name="message" placeholder="How Can We Help You!!" />
        <div className="submit__button__container">
          <button className="law__submit__button" name="Submit Button" type="submit">
            <h4>Submit</h4>
          </button>
        </div>
      </form>
    </main>
  );
};

export default ContactLaw;
