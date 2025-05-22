import Image from "next/image";
import ContactEntry from "./ContactEntry";

const ContactInformation = () => {
    return (<div className="contact">
          <address className="contact__container">
            <div className="contact__inner__container">
              <div>
              <Image src="/phone.png" alt="Phone Outline" width={50} height={50} loading="lazy" />
              </div>
              <div>
                <h4>Phone:</h4>
                <h4>(905) 517-0696</h4>
              </div>
            </div>
            <div className="contact__inner__container">
              <div>
              <Image src="/mail.png" alt="Mail Icon" width={50} height={50} loading="lazy" />
              </div>
              <div>
                <h4>Mail:</h4>
                <h4>admin@ninjadevz.com</h4>
              </div>
            </div>
          </address>
          <div className="contact__container">
            <ContactEntry />
          </div>
        </div>  );
}
 
export default ContactInformation;