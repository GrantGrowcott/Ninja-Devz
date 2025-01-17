import Image from "next/image";

interface AuthorTemplateProps {
    authorImage: string;
    authorAltDescription: string;
    authorBio: string;
    authorName: string;
  }


const AuthorTemplate = ({authorImage, authorAltDescription, authorBio, authorName}:AuthorTemplateProps  ) => {
    return (<div className="blog__author">
                <Image src= {authorImage} alt={authorAltDescription}
                width={100}
                height={100}/>
                <div>
                  <p>{authorBio}</p>
                  <p>{authorName}</p>
                </div>
              </div>  );
}
 
export default AuthorTemplate;