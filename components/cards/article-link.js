import Link from "next/link";
import Date from "../utilities/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const ArticleLink = ({ slug, date, title, excerpt }) => {
  return (
    <Link href={`/blog/${slug}`} key={slug}>
      <a className="[&>*>h3]:hover:underline">
        <div className="flex h-[14rem] transform cursor-pointer flex-col rounded-md border border-slate-400 border-opacity-20 p-4 shadow-md shadow-shadow backdrop-blur-[1px] transition-all duration-300 hover:-translate-y-1 hover:border-opacity-10 hover:shadow-lg hover:shadow-shadow hover:backdrop-blur-[2px] lg:h-[16rem] [&>span>svg]:hover:animate-bounceRight">
          <h3>{title}</h3>
          <small className="text-font-secondary">
            <Date dateString={date} />
          </small>
          <p
            className="mt-4 h-full overflow-hidden text-sm font-normal text-font-primary"
            style={{
              WebkitMaskImage:
                "linear-gradient(180deg, #000000 40%, transparent",
            }}
          >
            {excerpt}
          </p>
          <span className="font-normal text-font-secondary">
            Read More{" "}
            <FontAwesomeIcon className="ml-2" icon={faArrowRightLong} />
          </span>
        </div>
      </a>
    </Link>
  );
};

export default ArticleLink;
