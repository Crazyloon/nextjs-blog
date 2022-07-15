import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "../icons/home";

const NavBrandLink = ({ url, text, icon, active, display }) => {
  return (
    <li
      className={`h-9 flex align-center text-xl hover:bg-secondary-hover cursor-pointer transition-colors m-0 ${
        active ? "bg-secondary text-font-color" : ""
      }`}
    >
      <Link href={url} passHref>
        <a className="flex px-3 py-1 items-center text-link-text hover:text-link-text visited:text-link-text hover:no-underline">
          <FontAwesomeIcon icon={icon} className="w-[20px] h-[20px]" />
          <span className={`ml-3 mr-1 ${display ? "" : "hidden"}`}>{text}</span>
        </a>
      </Link>
    </li>
  );
};

export default NavBrandLink;
