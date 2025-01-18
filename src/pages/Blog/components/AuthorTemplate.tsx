import Image from "next/image";

interface AuthorTemplateProps {
  authorImage: string;
  authorAltDescription: string;
  authorBio: string;
  authorName: string;
  heroImage: string;
  heroImageAltDescription: string;
}

const AuthorTemplate = ({ authorImage, authorAltDescription, authorBio, authorName, heroImage, heroImageAltDescription }: AuthorTemplateProps) => {
  return (
    <>
      <div className="blog__author">
        <Image src={authorImage} alt={authorAltDescription} width={100} height={100} />
        <div>
          <p>{authorBio}</p>
          <p>{authorName}</p>
        </div>
      </div>
      <div>
        <Image src={heroImage} alt={heroImageAltDescription} width={920} height={500} className="blog__hero__image" />
      </div>
    </>
  );
};

export default AuthorTemplate;
