import { useRouter } from "next/router";
import BreadCrumbsLaw from "../components/BreadCrumbsLaw"; 
import GreenNav from "@/components/GreenNav";

const Post2 = () => {
  const router = useRouter();
  const { title } = router.query;

  return (
    <>
      <GreenNav />
      <div className="blog__background">
        <div className="blog__layout">
          <BreadCrumbsLaw title={decodeURIComponent(title as string)} />
          <h1>{decodeURIComponent(title as string)}</h1>
        </div>
      </div>
    </>
  );
};

export default Post2;
