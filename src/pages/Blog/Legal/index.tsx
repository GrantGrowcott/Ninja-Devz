import GreenNav from "@/components/GreenNav";
import BlogTitleImage from "../components/BlogTitleImage";
const LegalBlog = () => {
  return (
    <>
    <GreenNav />
      <div className="blog__posts">
        <ul>
          <BlogTitleImage 
              href="/Blog/Legal/How-to-Help-Law-Firms-with-SEO-Issues-and-other-fun-things"
              title="How to Help Law Firms with SEO Issues and other fun things"
              imageSrc="/medical-button-pic.jpg"
              imageAlt="Description of image 1"
              
            />
          <BlogTitleImage 
              href="/Blog/Legal/Post2"
              title="5 Key Topics for your Legal Blog for maximum conversions"
              imageSrc="/medical-button-pic.jpg"
              imageAlt="Description of image 1"

            />
        </ul>
      </div>
    </>
  );
};

export default LegalBlog;
