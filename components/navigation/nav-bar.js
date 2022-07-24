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

  return (
    <nav className={`bg-navbar w-full fixed top-0 z-50`}>
      <div
        className={`max-w-5xl mx-auto ${
          menuOpen ? "" : "flex justify-between"
        }`}
      >
        <NavBrandLink
          active={router.pathname === "/"}
          url="/"
          text="Home"
          icon={faHome}
          display={menuOpen}
        />
        <ul
          className={`m-0 overflow-hidden list-none relative ${
            menuOpen ? "overflow-visible" : ""
          }`}
        >
          <NavLink
            active={router.pathname.includes("/blog")}
            url="/blog"
            text="Blog"
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
        </ul>
        <div>
          <ThemeSwitch display={menuOpen} />
          <NavToggle
            isOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            icon={faBars}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
