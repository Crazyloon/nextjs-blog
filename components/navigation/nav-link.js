import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AchievementContext from "../achievements/achievement-context";
import { useContext } from "react";

const NavLink = ({ url, text, icon, display, active, brand }) => {
  const { achievementsManager } = useContext(AchievementContext);

  return (
    <li
      className={`h-9 float-left justify-center align-center text-xl hover:bg-secondary-hover cursor-pointer transition-colors m-0 ${
        active ? "bg-secondary text-font-color" : ""
      } ${display ? "block float-none" : "hidden lg:block"}`}
    >
      <Link href={url} passHref>
        <a
          onClick={() => {
            achievementsManager.advanceProgress("seetheworld", url);
          }}
          className={`flex ${
            display ? "px-3" : "px-5"
          } py-1 items-center text-link-text  hover:no-underline hover:text-link-text visited:text-link-text`}
        >
          <FontAwesomeIcon icon={icon} />
          <span className="ml-3 mr-1" id="posts">
            {text}
          </span>
        </a>
      </Link>
    </li>
  );
};

export default NavLink;
