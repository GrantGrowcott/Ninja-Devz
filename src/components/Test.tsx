import { db } from "../../lib/firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

interface BlogsByCategoryProps {
  category: string;
}

interface Blog {
  id: string;
  title: string;
  content: string;
}

const BlogsByCategory = ({ category }: BlogsByCategoryProps) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const categoryDoc = doc(db, "Categories", category);
      const blogsCollection = collection(categoryDoc, "Blogs");
      const querySnapshot = await getDocs(blogsCollection);

      const data = querySnapshot.docs.map((doc) => {
        const blogData = doc.data() as Blog;

        return {
          id: doc.id, 
          title: blogData.title,
          content: blogData.content,
        };
      });

      setBlogs(data);
    };

    fetchData();
  }, [category]);

  return (
    <div>
      <h1>Blog Posts in {category}:</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogsByCategory;
