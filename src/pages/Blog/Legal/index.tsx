import Link from "next/link";

const LegalBlog = () => {
  return (
    <div>
      <h1>Legal Blog</h1>
      <ul>
        <li>
          <button>
            <Link href="/Blog/Legal/post1">Legal Post 1</Link>
          </button>
        </li>
        <li>
          <button>
            <Link href="/Blog/Legal/post2">Legal Post 2</Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LegalBlog;
