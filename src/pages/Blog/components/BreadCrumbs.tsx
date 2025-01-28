import Link from "next/link";
import { useRouter } from "next/router";
import { BreadCrumbsProps } from "@/constants";

const BreadCrumbs = ({category}: BreadCrumbsProps) => {
  const router = useRouter();
  const { asPath } = router;
  const formattedTitle = asPath.split("/").pop()?.replace(/-/g, " ") || "";
  
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
          <span className="breadcrumb-separator">/</span>
        </li>
        <li>
          <a> {formattedTitle}</a>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
