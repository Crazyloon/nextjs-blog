import Image from "next/image";
import Link from "next/link";

const AuthorHeader = ({ home, name, avatar, homepage }) => {
  return (
    <div className="align-center mb-6 flex justify-center">
      {home ? (
        <>
          <Image
            priority
            src={`/images/${avatar.toLowerCase().trim()}.jpg`}
            className="rounded-full"
            height={144}
            width={144}
            alt={name}
          />
        </>
      ) : (
        <>
          <Link href={homepage}>
            <a>
              <Image
                priority
                src={`/images/${avatar.toLowerCase().replace(" ", "")}.jpg`}
                className="rounded-full"
                height={144}
                width={144}
                alt={name}
              />
            </a>
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthorHeader;
