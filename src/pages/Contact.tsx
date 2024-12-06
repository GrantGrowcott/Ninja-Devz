import ContactEntry from "@/components/ContactEntry";
import { contactInfo } from "../constants";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Contact Ninja Devz | Get in Touch</title>
          <meta
            name="description"
            content="Ready to discuss your web development project? Fill out our contact form or reach out directly. Our team at Ninja Devz is here to assist you with custom websites and mobile apps."
          />
          <link rel="canonical" href="https://ninjadevz.com/Contact" />
        </Helmet>
      </HelmetProvider>
      <NavBar />
      <header></header>
      <main className="contact__page">
        <div className="contact__container">
          <ContactEntry />
        </div>
        <address className="contact__container">
          <Image
            src={contactInfo}
            alt="Phone number and email address of the development team: (905-517-0696), admin@ninjadevz.com"
          />
        </address>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
