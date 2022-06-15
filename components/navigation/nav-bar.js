import React, { useState } from "react";
import {
  faHome,
  faTh,
  faBlog,
  faBars,
  faVideo,
  faBowlFood,
} from "@fortawesome/free-solid-svg-icons";
import ThemeSwitch from "../utilities/theme-switch";
import { useRouter } from "next/router";
import NavToggle from "./nav-toggle";
import NavLink from "./nav-link";
import NavBrandLink from "./nav-brand-link";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  let listItemStyles = ``;

  return (
    <nav className="bg-navbar mb-8">
      <ul
        className={`m-0 overflow-hidden bg-navbar list-none relative ${
          menuOpen ? "overflow-visible" : ""
        }`}
      >
        <NavBrandLink
          active={router.pathname === "/"}
          url="/"
          text="Home"
          icon={faHome}
          display={menuOpen}
        />
        <NavLink
          active={router.pathname.includes("/posts")}
          url="/posts"
          text="Articles"
          icon={faBlog}
          display={menuOpen}
        />
        <NavLink
          active={router.pathname.includes("/vlog")}
          url="/vlog"
          text="Videos"
          icon={faVideo}
          display={menuOpen}
        />
        <NavLink
          active={router.pathname.includes("/gallery")}
          url="/gallery"
          text="Gallery"
          icon={faTh}
          display={menuOpen}
        />
        <NavLink
          active={router.pathname.includes("/recipes")}
          url="/recipes"
          text="Recipes"
          icon={faBowlFood}
          display={menuOpen}
        />
        <ThemeSwitch display={menuOpen} />
        <NavToggle isOpen={menuOpen} setMenuOpen={setMenuOpen} icon={faBars} />
      </ul>
    </nav>
  );
};

export default NavBar;
