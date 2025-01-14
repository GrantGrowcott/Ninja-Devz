import { useRouter } from 'next/router';
import { db } from '../../../../lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

// Define the Blog type to match the Firestore document structure
interface Blog {
  title: string;
  description: string;
}

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;  // Only using `slug` for querying
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    if (typeof slug === 'string') {
      const fetchBlog = async () => {
        // Get a reference to the Blogs collection
        const blogsCollection = collection(db, 'Categories', 'Medical', 'Blogs');
        
        // Query to find the document where the slug matches
        const q = query(blogsCollection, where('slug', '==', slug));
        
        // Execute the query
        const querySnapshot = await getDocs(q);

        // Check if we found any matching document
        if (!querySnapshot.empty) {
          const docSnap = querySnapshot.docs[0];
          const data = docSnap.data() as Blog;
          setBlog(data);
        } else {
          console.error('No such document with this slug!');
        }
      };

      fetchBlog();
    }
  }, [slug]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
    </div>
  );
};

export default BlogPost;
