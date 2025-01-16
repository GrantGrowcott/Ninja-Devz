// components/PostPageLayout.tsx
import GreenNav from "@/components/GreenNav";
import BreadCrumbsLaw from "../components/BreadCrumbsLaw";

interface PostPageLayoutProps {
  title: string;
  children: React.ReactNode; 
}

const PostPageLayout = ({ title, children }: PostPageLayoutProps) => {
  return (
    <div>
      <GreenNav />
      <div className="blog__background">
        <div className="blog__layout">
          <BreadCrumbsLaw title={title} />
          <h1>{title}</h1>
          <div className="blog__post__content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PostPageLayout;
