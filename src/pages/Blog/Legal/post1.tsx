import BreadCrumbs from "../components/BreadCrumbs";
import GreenNav from "@/components/GreenNav";

const post1 = () => {
  return (
    <>
      <GreenNav />
      <div className="blog__background">
        <div className="blog__layout">
          <BreadCrumbs />
          <h1>Post 1</h1>
          <p>Stuff Goes Here</p>
        </div>
      </div>
    </>
  );
};

export default post1;
