import Image from "next/image";
import GetStartedButton from "@/components/GetStartedButton";
const CTABlog = () => {
    return (
        <div className="blog__cta">
            <Image src= "/profile-pic.jpg" width={200} height={300} alt="headshot of Grant Growcott"/>
            <div>
                <h3>See How My Agency Can Drive More Traffic to Your Website</h3>
                <ul>
                    <li>SEO - unlock more SEO traffic. See real results.</li>
                    <li>Content Marketing - our team creates epic content that will get shared, get links, and attract traffic.</li>
                    <li>Paid Media - effective paid strategies with clear ROI.</li>
                </ul>
                <GetStartedButton />
            </div>

        </div>
      );
}
 
export default CTABlog;