import ContactEntry from "@/components/ContactEntry";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Ninja Devz | Get in Touch</title>
        <meta
          name="description"
          content="Ready to discuss your web development project? Fill out our contact form or reach out directly. Our team at Ninja Devz is here to assist you with custom websites and mobile apps."
        />
        <link rel="canonical" href="https://ninjadevz.com/Contact" />
      </Head>
      <NavBar />
      <header></header>
      <main className="contact__page">
        <div className="contact__container">
          <ContactEntry />
        </div>
        <address className="contact__container">
          <Image
            src="/contact-info.png"
            alt="Contact information for Grant Growcott. Email Address: admin@ninjadevz.com | Phone Number: (905)-517-0696"
            width={500}
            height={500}
            loading="lazy"
            className="contact__image"
          />
        </address>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
