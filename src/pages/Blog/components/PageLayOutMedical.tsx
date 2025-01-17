import GreenNav from "@/components/GreenNav";
import BreadCrumbs from "./BreadCrumbs";
import { useRouter } from "next/router";
interface PostPageLayoutProps {
  children: React.ReactNode;
}

const PostPageLayoutMedical = ({  children }: PostPageLayoutProps) => {

  const router = useRouter();
    const { asPath } = router;
  
     const lastSegment = asPath.split('/').pop() || "";
  
     const formattedTitle = lastSegment.replace(/-/g, " ");
  return (
    <div>
      <GreenNav />
      <div className="blog__background">
        <div className="blog__layout">
          <BreadCrumbs category="Medical"  />
          <h1>{formattedTitle}</h1>
          <div className="blog__post__content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PostPageLayoutMedical;
