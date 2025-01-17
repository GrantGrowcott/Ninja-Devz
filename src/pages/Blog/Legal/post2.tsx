// pages/Blog/Legal/post1.tsx
import { useRouter } from "next/router";
import PostPageLayoutLaw from "../components/PageLayoutLaw";

const Post2 = () => {
  const router = useRouter();
  const { title } = router.query;

  return (
    <PostPageLayoutLaw title={decodeURIComponent(title as string)}>
      <p>Content of the blog post will go here...</p>
    </PostPageLayoutLaw>
  );
};

export default Post2;
