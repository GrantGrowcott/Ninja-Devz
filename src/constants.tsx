const ninja = "https://res.cloudinary.com/dkvo68om8/image/upload/v1733000645/pec3obl7dcljnsycw7uf.png";
const smallNinja = "https://res.cloudinary.com/dkvo68om8/image/upload/v1733011837/o5kzk8wrkp8sn10aif36.webp";

const phone = "../public/phone.png";
const piggyBank = "../public/phone.piggybank.png";
const checkCircle = "../public/checkcircle.png";
const profilePic = "../public/profile-pic.png";
const one = "../public/one.png";
const two = "../public/two.png";
const three = "../public/three.png";
const mail = "../public/mail.png";
const webLayout = "../public/web-layout.png";
const designIcons = "../public/design-icons.png";
const computerGraphs = "../public/computer-graphs.png";
const peak = "../public/peak.png";
const contactInfo = "../public/contact-info.png";
const tabletMobile = "../public/tablet-mobile.png";
const targetDevices = "../public/target-devices.png";
const stopWatch = "../public/stopwatch.png";
const funnel = "../public/funnel.png";
const grant = "../public/grant.png";

const checkMark = 30;
const lawIcon = 50;
const blueIcon = "#1583F8";

export type FAQProps = {
  faqs: {
    question: string;
    answer: string;
  }[];
  textColor: string;
};

 const faqs = [
  {
    question: "Why does my law firm need SEO services?",
    answer:
      "Modern SEO strategies such as creating value added blogs and articles distinguish you firm from your competitors. This content will drive more traffic to your website thereby increasing the chances of acquiring new clients.",
  },
  {
    question: "How long does it take to see SEO results for a law firm?",
    answer:
      "The effectiveness of SEO efforts varies depending on the competitiveness of your practice area, the consistency of content creation, and the quality of that content. You can typically expect to see meaningful results within 3 to 6 months. ",
  },
  {
      question: "How do you measure the success of your SEO efforts?",
      answer:
        "Success is measured through key performance indicators (KPIs) such as increased website traffic, higher search rankings, more client inquiries, and ultimately, increased case leads.",
    },
    {
      question: "What makes your SEO services different from others?",
      answer:
        "We provide customized SEO strategies designed exclusively for law firms, emphasizing local keywords, and creating legal guides, case studies, and blogs. We also connect you with authoritative figures in your specialty to enhance your professional reputation.",
    },
    {
      question: "How can a blog benefit my law firm’s SEO?",
      answer:
        "Regularly updated blogs help position your firm as an authority in the legal field, provide valuable information to potential clients, and improve your website's SEO through fresh, relevant content.",
    },
    {
      question: "Do you only help with SEO strategies?",
      answer:
        "We offer a comprehensive service that encompasses website design and development, analytics tracking, Google Ads management, and organic content creation, along with other essential SEO strategies tailored to your needs.",
    },
];

export {
  ninja,
  smallNinja,
  phone,
  piggyBank,
  checkCircle,
  profilePic,
  one,
  two,
  three,
  mail,
  webLayout,
  designIcons,
  computerGraphs,
  peak,
  contactInfo,
  tabletMobile,
  targetDevices,
  stopWatch,
  funnel,
  grant,
  checkMark,
  lawIcon,
  blueIcon,
  faqs
};
