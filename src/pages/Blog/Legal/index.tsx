import GreenNav from "@/components/GreenNav";
import BlogTitleImage from "../components/BlogTitleImage";
const LegalBlog = () => {
  return (
    <>
    <GreenNav />
      <div className="blog__posts">
        <ul>
          <BlogTitleImage 
              href="/Blog/Legal/Must-Have-Law-Firm-Website-Features-to-Convert-Visitors-into-Clients"
              title="Must Have Law Firm Website Features to Convert Visitors into Clients"
              imageSrc="/post-1.png"
              imageAlt="Description of image 1"
              
            />
          {/* <BlogTitleImage 
              href="/Blog/Legal/5-Key-Topics-for-your-Legal-Blog-for-maximum-conversions"
              title="5 Key Topics for your Legal Blog for maximum conversions"
              imageSrc="/post-1.png"
              imageAlt="Description of image 1"

            /> */}
        </ul>
      </div>
    </>
  );
};

export default LegalBlog;
