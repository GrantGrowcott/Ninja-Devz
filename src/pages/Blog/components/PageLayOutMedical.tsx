import GreenNav from "@/components/GreenNav";
import BreadCrumbs from "./BreadCrumbs";
import { useRouter } from "next/router";
import AuthorTemplate from "./AuthorTemplate";
import { PostPageLayoutProps } from "@/constants";

const PostPageLayoutMedical = ({ authorImage, authorAltDescription, authorBio, authorName, heroImage, heroImageAltDescription, children }: PostPageLayoutProps) => {
  const router = useRouter();
  const { asPath } = router;
  const formattedTitle = asPath.split("/").pop()?.replace(/-/g, " ") || "";
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
