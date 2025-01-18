import GreenNav from "@/components/GreenNav";
import BreadCrumbs from "./BreadCrumbs";
import { useRouter } from "next/router";
import AuthorTemplate from "./AuthorTemplate";

interface PostPageLayoutProps {
  children: React.ReactNode;
  authorImage: string;
  authorAltDescription: string;
  authorBio: string;
  authorName: string;
  heroImage: string;
  heroImageAltDescription: string;
}

const PostPageLayoutMedical = ({ authorImage, authorAltDescription, authorBio, authorName, heroImage, heroImageAltDescription, children }: PostPageLayoutProps) => {
  const router = useRouter();
  const { asPath } = router;

  const lastSegment = asPath.split("/").pop() || "";

  const formattedTitle = lastSegment.replace(/-/g, " ");
  return (
    <div>
      <GreenNav />
      <div className="blog__background">
        <div className="blog__layout">
          <BreadCrumbs category="Medical" />
          <h1>{formattedTitle}</h1>
          <AuthorTemplate authorImage = {authorImage} authorAltDescription = {authorAltDescription} authorBio = {authorBio} authorName = {authorName} heroImage = {heroImage}heroImageAltDescription= {heroImageAltDescription}/>
          <div className="blog__post__content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PostPageLayoutMedical;
