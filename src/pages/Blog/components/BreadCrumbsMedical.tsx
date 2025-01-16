import Link from "next/link";

interface BreadCrumbsProps {
  title: string;
}

const BreadCrumbsMedical = ({ title}: BreadCrumbsProps) => {
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
          <Link href="/Blog/Medical"> Medical Blogs</Link>
        </li>
        <li>
          <a>/ {title}</a>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumbsMedical;
