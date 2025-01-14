import Link from 'next/link';

const Blog = () => {
  return (
    <div>
      <h1>Welcome to the Blog</h1>
      <p>Select a category to explore:</p>
      <button>
        <Link href="/Blog/Legal">Go to Legal Blog</Link>
      </button>
      <button>
        <Link href="/Blog/Medical">Go to Medical Blog</Link>
      </button>
    </div>
  );
};

export default Blog;
