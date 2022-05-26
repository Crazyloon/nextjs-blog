import React, { useState } from "react";
import { faHome, faTh, faBlog , faBars, faVideo } from '@fortawesome/free-solid-svg-icons'
import ThemeSwitch from "./theme-switch";
import { useRouter } from 'next/router';
import NavToggle from "./nav-toggle";
import NavLink from "./nav-link";
import NavBrandLink from "./nav-brand-link";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  let listItemStyles = ``

  return (
    <nav className='bg-navbar mb-8'>
      <ul className={`m-0 overflow-hidden bg-navbar list-none relative ${menuOpen ? 'overflow-visible' : ''}`}>
        <NavBrandLink active={router.pathname === '/'} url='/' text='Home' icon={faHome} display={menuOpen}/>
        <NavLink active={router.pathname === '/blog'} url='/blog' text='Blog' icon={faBlog}  display={menuOpen} />
        <NavLink active={router.pathname === '/vlog'} url='/vlog' text='Vlog' icon={faVideo}  display={menuOpen} />
        <NavLink active={router.pathname === '/gallery'} url='/gallery' text='Gallery' icon={faTh}  display={menuOpen} />
        <ThemeSwitch display={menuOpen}/>
        <NavToggle isOpen={menuOpen} setMenuOpen={setMenuOpen} icon={faBars} />
      </ul>
    </nav>
  );
};

export default NavBar;