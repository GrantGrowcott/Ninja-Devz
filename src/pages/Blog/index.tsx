import Link from "next/link";
import GreenNav from "@/components/GreenNav";
import Image from "next/image";

const Blog = () => {
  return (
    <>
      <GreenNav />
      <div className="blogs">
        <h1>Welcome to our Blogs</h1>
        <p>Select a category to explore:</p>
        <div className="blog__navigation">
          <div>
            <button>
              <Link href="/Blog/Legal">
                <Image src="/law-button-pic.jpg" alt="Gavel on Table" width={300} height={300} priority={true} />
                <h2>Legal Resources</h2>
              </Link>
            </button>
          </div>
          {/* <div>
            <button>
              <Link href="/Blog/Medical">
                <Image src="/medical-button-pic.jpg" alt="Gavel on Table" width={300} height={300} priority={true} />
                <h2>Medical Resources</h2>
              </Link>
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Blog;
