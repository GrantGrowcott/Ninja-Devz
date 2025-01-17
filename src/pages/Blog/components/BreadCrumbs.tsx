import Link from "next/link";
import { useRouter } from "next/router";

interface BreadCrumbsProps {
  category: string;
}

const BreadCrumbs = ({category}: BreadCrumbsProps) => {
  const router = useRouter();
  const { asPath } = router;

  const lastSegment = asPath.split('/').pop() || "";

  const formattedTitle = lastSegment.replace(/-/g, " ");
  
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb-list">
        <li>
          <Link href="/Blog">Blogs</Link>
        </li>
        <li>
          <span className="breadcrumb-separator">/</span>
        </li>
        <li>
          <Link href={`/Blog/${category}`}> {category} Blogs</Link>
        </li>
        <li>
          <a>/ {formattedTitle}</a>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
