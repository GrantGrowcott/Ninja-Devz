import { useRouter } from "next/router";
import PostPageLayoutMedical from "../components/PageLayOutMedical";

const Post1 = () => {
  const router = useRouter();
  const { title } = router.query;

  return (
    <PostPageLayoutMedical title={decodeURIComponent(title as string)}>
      <p>Content of the blog post will go here...</p>
    </PostPageLayoutMedical>
  );
};

export default Post1;
