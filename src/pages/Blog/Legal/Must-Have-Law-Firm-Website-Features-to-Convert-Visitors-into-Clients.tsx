import PostPageLayoutLaw from "../components/PageLayoutLaw";
import Image from "next/image";

const Post1 = () => {
  return (
    <PostPageLayoutLaw
      authorImage="/profile-pic.jpg"
      authorAltDescription="Founder Grant Growcott"
      authorBio="I hope you enjoy reading this blog post."
      authorName=" Grant Growcott | Founder of Ninja Devz Web & Mobile Designs"
      heroImage="/post-1.png"
      heroImageAltDescription="Lawyers talking together while standing"
    >
      <p>
        How can law firms convert their current and future traffic into consistent clients? This age old question is
        crucial to address for any novice or even established firm.
      </p>
      <p>
        Knowing how to give viewers immediate answers to their questions can be the difference between a person calling,
        and immediately bouncing to your competitor.{" "}
      </p>
      <p>
        Even though there is no one strategy firms can use to convert more clients, my hope is that some of these tips
        will create immediate benefits for you by going back to the basics of Search Engine Optimization (SEO), and
        content creation.
      </p>
      <p>Here are the steps I will cover in this guide.</p>

      <h2>1. Ensure your Meta Title and Description matches your client goals</h2>
      <p>
        Our goal here is to match the intent of the person searching in the their browser of choice (Google, Bing etc)
        with the words we directly use on our website.{" "}
        <span className="green-text">Specificity will be a proxy for competency.</span> The closer we are to matching
        their search, the more likely they are too click on our website for our services.
      </p>
      <p>
        The <span className="green-text">Meta title</span> is the first thing your potential customer will see. It is in
        large font and makes a big impact on whether a person will click on your website or go to your competitor.
      </p>
      <Image src="/title.png" width={350} height={100} alt="meta title example with arrows" />
      <p>
        <span className="green-text">Meta descriptions</span> give users an even longer summary of what the page is
        going to be about when searching for something on a major search engine like google.{" "}
      </p>
      <Image src="/meta.png" width={350} height={100} alt="meta description example with arrows" />
      <p>
        I can personally attest that providing a description that broadly answers a potential client&apos;s will draw
        people in much easier.
      </p>
      <p>
        Depending on whether you use WordPress, Wix or strictly code, you will need to make changes to the HTML such as
        below. If you need help, contact your development team.
      </p>
      <Image src="/meta-code.png" width={350} height={400} alt="meta description example with arrows" />
      <p>
        When creating the <span className="green-text">title</span>, try to be specific on the niche(s) that you have
        the most expertise. Consider using a combination of <span className="green-text">niche and location</span> for
        optimal targeting.
      </p>
      <p>Ex:</p>
      <ul>
        <li>Legal Contract London</li>
        <li>Personal Injury Law Vancouver</li>
        <li>Los Angeles Family Law</li>
      </ul>
      <p>
        For the <span className="green-text">description</span>, list your primary areas of specialty,statements of
        authority such as your total years of experience and consider adding limited time deals such as free
        consultations or discounts.
        <p>Ex:</p>
      </p>
      <ul>
        <li>New York&apos;s premier firm specializing in Personal Injury law for over 20 years.</li>
        <li>Serving Houston with trusted advice for your legal needs.</li>
        <li>20% off our local Family law services for a limited time.</li>
      </ul>
      <p className="bold__post">An Important Point to Note:</p>
      <p>
        Make sure the meta description is under <span className="green-text">160 characters in length</span>.
        Descriptions longer than this will be cut off on smaller screens.{" "}
      </p>
      <h2>Have an easily accessible Call-to-Action (CTA) Button or Form </h2>
      <p>
        We want our potential customers to know how to find out how to contact as quickly as possible. If you place your
        form to far down the page (middle or bottom section), the viewer is more likely to click away from your page.
      </p>
      <p className="bold__post">Design your Call to Action using these key features:</p>
      <ul>
        <li>Contrasting Color from your background to stand out</li>
        <li>Bold text</li>
        <li>Language that is appropriate for attracting client such as &quot;Contact Us&quot;, &quot;Get in Touch&quot; or &quot;Let&apos;s Chat&quot;</li>
      </ul>
      <p>Here is an example:</p>
      <Image src= "/hero-example.png" width={483} height={268} alt="Example Hero Section for Law Firm with Title and Subtitle" />
      <p>Here we can see a Call-to-Action (CTA) button with a white background that creates a large amount of contrast with the dark blue background. It is highly visible and tells the user exactly what they are going to do. This is to be placed in the first section of the website (typically on the home page and is known as the hero section in technical terms)</p>
    </PostPageLayoutLaw>
  );
};

export default Post1;
