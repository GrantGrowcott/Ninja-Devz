import Image from "next/image";
import Link from "next/link";
interface TitleImageProps {
  href: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
}

const BlogTitleImage = ({ href, title, imageSrc, imageAlt }: TitleImageProps) => {
  return (
    <li className="blog__post">
      <button>
      <Link href={`${href}?title=${encodeURIComponent(title)}`}>
          <div className="blog__post__orientation">
            {imageSrc && (
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={400}
                height={300}
                className="blog__post__image"
                priority={true}
              />
            )}
            <div className="blog__post__title">
              <h2>{title}</h2>
            </div>
          </div>
        </Link>
      </button>
    </li>
  );
};

export default BlogTitleImage;
