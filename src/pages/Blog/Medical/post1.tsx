import { useRouter } from "next/router";
import BreadCrumbsMedical from "../components/BreadCrumbsMedical";
import GreenNav from "@/components/GreenNav";

const Post1 = () => {
  const router = useRouter();
  const { title } = router.query;

  return (
    <>
      <GreenNav />
      <div className="blog__background">
        <div className="blog__layout">
          <BreadCrumbsMedical title={decodeURIComponent(title as string)} />
          <h1>{decodeURIComponent(title as string)}</h1>
        </div>
      </div>
    </>
  );
};

export default Post1;

