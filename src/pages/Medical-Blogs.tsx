import { db } from "../../lib/firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  description: string;
  slug: string;
}

const MedicalBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const category = "Medical";

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
          description: blogData.description,
          slug: blogData.slug,
        };
      });

      setBlogs(data);
    };

    fetchData();
  }, [category]);

  return (
    <div className="blogs">
      <h1>Medical Blog Posts</h1>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <Link key={blog.id} href={`/Blogs/${category}/${blog.slug}`}>
            <button className="blog__button__container">
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
            </button>
          </Link>
        ))
      ) : (
        <p>No blogs available in this category.</p>
      )}
    </div>
  );
};

export default MedicalBlogs;
