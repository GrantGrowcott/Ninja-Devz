import PostPageLayoutLaw from "../components/PageLayoutLaw";
import Image from "next/image";
import Link from "next/link";
import CTABlog from "../components/CTABlog";

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
      <Image src="/title.png" width={300} height={100} alt="meta title example with arrows" />
      <p>
        <span className="green-text">Meta descriptions</span> give users an even longer summary of what the page is
        going to be about when searching for something on a major search engine like google.{" "}
      </p>
      <Image src="/meta.png" width={300} height={100} alt="meta description example with arrows" />
      <p>
        I can personally attest that providing a description that broadly answers a potential client&apos;s will draw
        people in much easier.
      </p>
      <p>
        Depending on whether you use WordPress, Wix or strictly code, you will need to make changes to the HTML such as
        below. If you need help, contact your development team.
      </p>
      <Image src="/meta-code.png" width={300} height={350} alt="meta description example with arrows" />
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
      <h2>2. Have an easily accessible Call-to-Action (CTA) Button or Form </h2>
      <p>
        We want our potential customers to know how to find out how to contact as quickly as possible. If you place your
        form to far down the page (middle or bottom section), the viewer is more likely to click away from your page.
      </p>
      <p className="bold__post">Design your Call to Action using these key features:</p>
      <ul>
        <li>Contrasting Color from your background to stand out</li>
        <li>Bold text</li>
        <li>
          Language that is appropriate for attracting client such as &quot;Contact Us&quot;, &quot;Get in Touch&quot; or
          &quot;Let&apos;s Chat&quot;
        </li>
      </ul>
      <p>Here is an example:</p>
      <Image
        src="/hero-example.png"
        width={300}
        height={200}
        alt="Example Hero Section for Law Firm with Title and Subtitle"
      />
      <p>
        Here we can see a Call-to-Action (CTA) button with a white background that creates a large amount of contrast
        with the dark blue background. It is highly visible and tells the user exactly what they are going to do. This
        is to be placed in the first section of the website (typically on the home page and is known as the hero section
        in technical terms).
      </p>
      <p>
        This section can re-direct to your contact page or use services such as{" "}
        <Link href="https://www.calendly.com">Calendly</Link>,{" "}
        <Link href="https://acuityscheduling.com/#gref">Acuity</Link>, or{" "}
        <Link href="https://www.setmore.com/">SetMore</Link> depending on your firm needs.
      </p>
      <h2>3. Fast Loading Website</h2>
      <p>
        An underrated factor in your ability to retain potential clients is how fast your website loads. When a person
        struggles to get on your website (or load parts like images once they are on your website), they are far more
        likely to becomes frustrated and leave.
      </p>
      <p>When looking at speed, here are a couple potential options to consider: </p>
      <h3>Perform a Lighthouse Assessment</h3>
      <Image src="/google-lighthouse-explained.png" width={300} height={200} alt="LightHouse Assessment Example Output "/>
      <p>
        This will determine if you are using the proper tags in your code, have slow loading pages and other issues
        going on with your website.
      </p>
      <p>
        You can check this by using a google extension called{" "}
        <Link href="https://developer.chrome.com/docs/lighthouse/overview#devtools">Lighthouse</Link>
      </p>
      <p>
        Once installed, you will need to run the test using incognito mode in the google browser for accurate results.
      </p>
      <h3>Compression of Images</h3>
      <p>
        Decreasing the size of images (especially the images that first appear when a user visits your websites) can
        drastically alter the initial load times of your website.
      </p>
      <p>
        You have two major options, .webp and .png. If you are concerned with compatibility on different platforms and
        care less about the size of the files, use .png.{" "}
      </p>
      <p>
        If you want the smallest possible files while still maintaining the overall quality of each image, use .webp
      </p>
      <p>
        Use <Link href="https://cloudconvert.com/">this</Link> tool to convert any image that is large. Images greater
        than 1 MB justify compressing into a smaller image format.
      </p>
      <h3>Use a Content Delivery Network (CDN)</h3>
      <Image src="/cloudinary.png" width={300} height={200} alt="LightHouse Assessment Example Output "/>
      <p>As your firm (and subsequently your website)  begins to scale, you will need to consider using different technologies that ensure your users can easily view your content.</p>
      <p>A Content Delivery Network (CDN) serves images and other resources over a server to vastly decrease loading times.</p>
      <p>Consider using a platform like <Link href="https://cloudinary.com/home">Cloudinary</Link> which provides a variety of different free and paid options for optimizing your website.</p>
      <h3>Server Side Rendering (SSR) the Website</h3>
      <p>
        Though a more complex endeavour, this can drastically decrease load times for your website. The{" "}
        <Link href="https://nextjs.org/"> Next.js</Link> framework is a great potential option to discuss with your
        development team if speed is of high priority to you.{" "}
      </p>
      <h2>4.Include Client Testimonials</h2>
      <p>You may think this is a simple point, ask your client for a review and post on your website or get them to review your business on Google.</p>
      <p>There is however a misconception of what you should be stated within these reviews. </p>
      <p>We want to make these reviews personal and include information that targets pain points that are clients had that you were able to solve.</p>
      <p>We want to include the following:</p>
      <ul>
        <li>Client First and Last Name along with their picture (if they are comfortable)</li>
        <li>The area of focus (personal injury, family law etc)</li>
        <li>The concern they initially had (finances, timeliness, lack of understanding of legal terms)</li>
        <li>The resolution they received (free consultation, discount, free legal advice, a favorable outcome)</li>
      </ul>
      <p>Try to include an emotional connection such as: &quot;I felt supported every step of the way.&quot; or &quot;They explained every step clearly and fought for my rights&quot;.</p>
      <p>Here is a potential template you can follow:</p>
      <Image src="/client-testimonial.png" width={300} height={300} alt="LightHouse Assessment Example Output "/>
      <p>Targeting key pain points of your clients will truly sell them on your services.</p>
      <p>When paired with Google Reviews, you will be far more likely to appear higher in the search rankings.</p>
      <CTABlog/>

    </PostPageLayoutLaw>
  );
};

export default Post1;
