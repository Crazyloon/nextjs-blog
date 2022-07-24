import Image from "next/image";

const SourcePageLink = ({ sourceName, sourcePageURL }) => (
  <span>
    {" "}
    - <a href={sourcePageURL}>{sourceName}</a>
  </span>
);

const ImageCredit = ({ src, alt, author, sourceName, sourcePageURL }) => {
  return (
    <figure className="flex flex-col items-center">
      <div className="w-full">
        <Image
          src={src}
          alt={alt}
          width="100%"
          height="55%"
          layout="responsive"
          quality={100}
        />
      </div>
      <figcaption className="text-xs">
        Image Credit: {author}
        {sourceName && sourcePageURL && (
          <SourcePageLink
            sourceName={sourceName}
            sourcePageURL={sourcePageURL}
          />
        )}
      </figcaption>
    </figure>
  );
};

export default ImageCredit;
