// pages/Blog/Legal/post1.tsx
import { useRouter } from "next/router";
import PostPageLayout from "../components/PageLayout";

const Post1 = () => {
  const router = useRouter();
  const { title } = router.query;

  return (
    <PostPageLayout title={decodeURIComponent(title as string)}>
      <p>Content of the blog post will go here...</p>
    </PostPageLayout>
  );
};

export default Post1;
