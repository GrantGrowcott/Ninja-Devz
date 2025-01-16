import GreenNav from "@/components/GreenNav";
import BlogTitleImage from "../components/BlogTitleImage";

const MedicalBlog = () => {
  return (
    <>
      <GreenNav />
      <div className="blog__posts">
        <ul>
          <BlogTitleImage 
            href="/Blog/Medical/Post1"
            title="How to Help Doctors with SEO Issues"
            imageSrc="/medical-button-pic.jpg"
            imageAlt="Description of image 1"
            
          />
          <BlogTitleImage 
            href="/Blog/Medical/Post2"
            title="Medical SEO Tips for 2025"
            imageSrc="/medical-button-pic.jpg"
            imageAlt="Description of image 2"
            
          />
        </ul>
      </div>
    </>
  );
};

export default MedicalBlog;
