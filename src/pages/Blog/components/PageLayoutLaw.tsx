import GreenNav from "@/components/GreenNav";
import BreadCrumbs from "./BreadCrumbs";
import { useRouter } from "next/router";
import AuthorTemplate from "./AuthorTemplate";
import { PostPageLayoutProps } from "@/constants";

const PostPageLayoutLaw = ({ authorImage, authorAltDescription, authorBio, authorName, heroImage, heroImageAltDescription, children }: PostPageLayoutProps) => {
  const router = useRouter();
  const { asPath } = router;
 const formattedTitle = asPath.split("/").pop()?.replace(/-/g, " ") || "";
  return (
    <div>
      <GreenNav />
      <article className="blog__background">
        <div className="blog__layout">
          <BreadCrumbs category="Legal" />
          <h1>{formattedTitle}</h1>
          <AuthorTemplate authorImage = {authorImage} authorAltDescription = {authorAltDescription} authorBio = {authorBio} authorName = {authorName} heroImage = {heroImage}heroImageAltDescription= {heroImageAltDescription}/>
          <div className="blog__post__content">{children}</div>
        </div>
      </article>
    </div>
  );
};

export default PostPageLayoutLaw;
