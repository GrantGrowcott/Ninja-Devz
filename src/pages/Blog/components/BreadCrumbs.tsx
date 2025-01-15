import Link from "next/link";

const BreadCrumbs = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb-list">
        <li>
          <Link href="/Blog">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/Blog/Legal">
            / Legal
          </Link>
        </li>
        
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
