import Link from "next/link";

const MedicalBlog = () => {
  return (
    <div className="attributes">
      <h1>Medical Blog</h1>
      <ul>
        <li>
          <button>
            <Link href="/Blog/Medical/post1">Medical Post 1</Link>
          </button>
        </li>
        <li className="topper">
          <button>
            <Link href="/Blog/Medical/post2">Medical Post 2</Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MedicalBlog;
