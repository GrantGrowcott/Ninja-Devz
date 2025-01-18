import PostPageLayoutMedical from "../components/PageLayOutMedical";

const Post2 = () => {
  return (
    <PostPageLayoutMedical
      authorImage="/profile-pic.jpg"
      authorAltDescription="Founder Grant Growcott"
      authorBio="I hope you enjoy reading this blog post."
      authorName=" Grant Growcott | Founder of Ninja Devz Web & Mobile Designs"
       heroImage="/firm-hero.png" heroImageAltDescription="Lawyers talking together while standing"
    >
      <p>Content of the blog post will go here...</p>
    </PostPageLayoutMedical>
  );
};

export default Post2;
