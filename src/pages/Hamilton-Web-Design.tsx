import GetStartedButton from "@/components/GetStartedButton";
import Image from "next/image";

const HamiltonWebDesign = () => {
  return (
    <div className="w-[85%] mx-auto pt-[200px]">
      <div className="flex flex-col justify-center items-center text-center ">
        <h1 className="text-[var(--green)] text-3xl ">Web Design for Hamilton Business Owners</h1>
        <h2 className="py-8 text-[var(--white)]">Branding, SEO, Web Design, Hosting</h2>
        <GetStartedButton />
      </div>
      <div className="grid lg:grid-cols-3 mt-10 gap-4">
        <div className="bg-[var(--green)] flex-1 text-center  p-12 rounded-xl">
          <h3 className="text-[var(--darkGreen)] text-xl mb-6">Clarity & Performance Over Flash</h3>
          <h4 className="text-[var(--white)] text-sm">
            We don’t just make beautiful websites — we build websites that clearly communicate your value and load
            lightning fast to convert more customers.
          </h4>
        </div>
        <div className="bg-[var(--green)] flex-1 text-center  p-12 rounded-xl">
          <h3 className="text-[var(--darkGreen)] text-xl mb-6">SEO & Strategy Built In</h3>
          <h4 className="text-[var(--white)] text-sm">
            No cookie-cutter themes here. Every site is uniquely crafted to reflect your brand and help your business
            stand out.
          </h4>
        </div>
        <div className="bg-[var(--green)] flex-1 text-center  p-12 rounded-xl">
          <h3 className="text-[var(--darkGreen)] text-xl mb-6">Local Partnership Mindset</h3>
          <h4 className="text-[var(--white)] text-sm">
            As a Hamilton-based agency, we care about our community. We build long-term relationships, not one-off
            transactions — you get a partner, not just a provider.
          </h4>
        </div>
      </div>
      <div className="flex mt-12 gap-4 flex-col lg:flex-row text-center lg:text-left">
        <div className="flex-1 mb-6 md:mb-0">
          <h3 className="text-[var(--green)] text-xl">What’s Getting in the Way of Growing Your Business Online?</h3>
          <GetStartedButton />
        </div>
        <div className="flex-1">
          <ul className="flex flex-col items-center justify-start mx-auto gap-4">
            <li>
              <h3 className="text-[var(--green)] text-lg">Your Website Isn’t Showing Up in Search</h3>
              <h4 className="text-[var(--white)] text-base">
                If you’re not ranking locally on Google, your competitors are getting the clicks — not you.
              </h4>
            </li>
            <li>
              <h3 className="text-[var(--green)] text-lg">Visitors Don’t Trust What They See</h3>
              <h4 className="text-[var(--white)] text-base">
                A slow, outdated, or unclear website makes potential customers bounce before they ever contact you.
              </h4>
            </li>
            <li>
              <h3 className="text-[var(--green)] text-lg">Your Website Isn’t Built to Convert</h3>
              <h4 className="text-[var(--white)] text-base">
                Without clear messaging, calls-to-action, and structure, even the best-looking website can fail to turn
                visitors into paying customers.
              </h4>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[var(--darkGreen)] text-center mt-12 p-6 md:p-20 rounded-xl">
        <h3 className="text-[var(--green)] text-xl md:text-4xl mb-12 max-w-2xl mx-auto ">
          Your Guide to Growing Online with Confidence
        </h3>
        <h4 className="text-[var(--white)] text-base md:text-2xl max-w-2xl mx-auto mb-12">
          I know what it’s like to pour everything into a business and still feel invisible online. Like you, I’ve had
          to figure out how to stand out, build trust, and win clients in a competitive market. That’s why I care about
          helping local business owners in Hamilton succeed — not just with great-looking websites, but with clear
          messaging, smart SEO, and real results. You’re not just hiring a designer — you’re getting a partner who
          understands what’s at stake and knows how to help you grow. You can trust me to handle the tech, the strategy,
          and the design — so you can focus on running your business.
        </h4>
        <GetStartedButton />
      </div>
      <div className="bg-[var(--green)] rounded-xl p-24 flex flex-col lg:flex-row gap-6 overflow-visible relative mt-12">
        <div className="flex-1 z-10">
          <h3 className="text-[var(--darkGreen)] text-3xl mb-6">
            If your website isn’t bringing in customers, it’s not doing its job. I help Hamilton businesses fix that.
          </h3>
          <hr className="border-t-2 border-[var(--darkGreen)] w-full" />
          <h4 className="text-[var(--darkGreen)] text-xl mt-6">Grant Growcott, CEO of Ninja Devz</h4>
        </div>
        <div className="flex-1 relative">
          <div className="w-[90%] mx-auto max-w-[500px] lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[50px] ">
            <div className="aspect-w-16 h-[400px] w-full">
              <iframe
                className="rounded-lg w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Placeholder Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-12 lg:mt-20 lg:ml-12 lg:justify-start lg:items-start">
        <GetStartedButton />
      </div>
      <h3 className="text-[var(--green)] text-center text-5xl my-24">Our 5 Step Plan for Success!!</h3>
      <div className="grid grid-cols-5 gap-4 items-center">
        <div className="col-span-5 lg:col-span-2 flex justify-center">
          <Image src="/Step_1.svg" width={300} height={300} alt="Programmer at Computer" />
        </div>
        <div className="col-span-5 lg:col-span-3">
          <h3 className="text-[var(--green)]">Step 1: Planning Stage</h3>
          <h4 className="text-[var(--white)]">
            Our process kicks off with a discovery call and stakeholder interviews to define your objectives and
            challenges, followed by a kickoff meeting to determine key milestones, iterative revisions to refine the
            solution, and finally the contract signing with first payment to formally launch the project.
          </h4>
        </div>
        <div className="col-span-5 lg:col-span-2 flex justify-center">
          <Image src="/Step_2.svg" width={300} height={300} alt="Programmer at Computer" />
        </div>
        <div className="col-span-5 lg:col-span-3">
          <h3 className="text-[var(--green)]">Step 2: Content Stage</h3>
          <h4 className="text-[var(--white)]">
            We continue with a website audit, SEO keyword research, and a comprehensive project brief—followed by
            sitemap creation, navigation wireframes, and a design survey—to ensure your site is strategically
            structured, search-friendly, and aligned with your brand from the ground up.
          </h4>
        </div>
        <div className="col-span-5 lg:col-span-2 flex justify-center">
          <Image src="/Step_3.svg" width={300} height={300} alt="Programmer at Computer" />
        </div>
        <div className="col-span-5 lg:col-span-3">
          <h3 className="text-[var(--green)]">Step 3: Design Stage</h3>
          <h4 className="text-[var(--white)]">
            We begin by understanding your business goals and collecting your branding assets to ensure everything
            aligns with your vision. Then, we explore design directions through moodboards, allowing you to select the
            style that fits best. From there, we create full website design comps and work with your feedback to refine
            the final look before development begins.
          </h4>
        </div>
        <div className="col-span-5 lg:col-span-2 flex justify-center">
          <Image src="/Step_4.svg" width={300} height={300} alt="Programmer at Computer" />
        </div>
        <div className="col-span-5 lg:col-span-3">
          <h3 className="text-[var(--green)]">Step 4: Build Stage</h3>
          <h4 className="text-[var(--white)]">
            Once the design is approved, we build out the pages, set up site navigation, and prototype any complex
            features. We test across browsers, integrate your content, and refine the site based on your feedback until
            it&apos;s ready to launch.
          </h4>
        </div>
        <div className="col-span-5 lg:col-span-2 flex justify-center">
          <Image src="/Step_5.svg" width={300} height={300} alt="Programmer at Computer" />
        </div>
        <div className=" col-span-5 lg:col-span-3">
          <h3 className="text-[var(--green)]">Step 5: Launch Stage</h3>
          <h4 className="text-[var(--white)]">
            After launch, we provide a live Q&A training webinar to walk you through your new website and ensure
            you&apos;re confident using it. We finalize the project with your approval, issue the final invoice, and
            offer a warranty period along with optional ongoing support and marketing services to help your business
            grow.
          </h4>
        </div>
      </div>

      <div className="bg-[var(--darkGreen)] p-24 rounded-2xl my-12">
        <h3 className="text-[var(--green)] text-center text-4xl mb-12 ">Our Promise to You</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-center">
          <div className="col-span-1">
            <h3 className="text-[var(--green)] text-2xl mb-6">Complete Coverage</h3>
            <h4 className="text-[var(--white)] ">
              Your website deserves full-circle care—from branding and design to hosting and copywriting. I deliver
              custom websites that reflect your unique business and work seamlessly to attract and convert customers. No
              corners cut, just end-to-end solutions built for growth.
            </h4>
          </div>
          <div className="col-span-1">
            <h3 className="text-[var(--green)] text-2xl mb-6">Tailored Designs</h3>
            <h4 className="text-[var(--white)] ">
              Your business is one of a kind—your website should be too. We design and develop custom websites that are
              fully tailored to your brand, helping you stand out and connect with your audience authentically. No
              templates, just strategic design built to drive results.
            </h4>
          </div>
          <div className="col-span-1">
            <h3 className="text-[var(--green)] text-2xl mb-6">Data Driven Decisions</h3>
            <h4 className="text-[var(--white)] ">
              We don’t just build beautiful websites — we make sure they work hard for your business. By integrating
              advanced analytics and tracking tools, you gain clear insights into how visitors interact with your site.
              This data lets you measure success, understand customer behavior, and make informed, data-driven decisions
              to continually improve your online presence and boost your results.
            </h4>
          </div>
          <div className="col-span-1">
            <h3 className="text-[var(--green)] text-2xl mb-6">Fluid Process</h3>
            <h4 className="text-[var(--white)] ">
              Hosting, maintenance, and updates are often overlooked but critical for a successful website. We take care
              of everything behind the scenes—ensuring your site stays secure from threats, loads quickly for every
              visitor, and is always running the latest software and features. You can focus on your business while we
              handle the technical upkeep, so your website remains reliable and performs at its best 24/7.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamiltonWebDesign;
