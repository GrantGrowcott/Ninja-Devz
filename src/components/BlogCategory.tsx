import { blogCategories } from "@/constants";
import { useRouter } from "next/router"; 


const BlogCategory = () => {

    const router = useRouter();

    const handleCategoryClick = (category: string) => {
        router.push(`/${category}-Blogs`);  // Navigate to the Blogs page with the category in the URL
      };
      return (
        <div>
          <h3 className="black-text">Blogs</h3>
          {blogCategories.map((category, index) => (
            <button
              key={index}
              className="category-button"
              onClick={() => handleCategoryClick(category)}  // Handle the click event to navigate
            >
              <h4>{category}</h4>
            </button>
          ))}
        </div>
      );
};

export default BlogCategory;
