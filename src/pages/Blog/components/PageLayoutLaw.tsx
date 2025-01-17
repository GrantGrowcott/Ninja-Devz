import GreenNav from "@/components/GreenNav";
import BreadCrumbsLaw from "./BreadCrumbsLaw";

interface PostPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const PostPageLayoutLaw = ({ title, children }: PostPageLayoutProps) => {
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

export default PostPageLayoutLaw;
