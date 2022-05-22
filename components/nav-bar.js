import React, { useState, useEffect, useRef } from "react";
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTh, faBlog , faBars, faVideo } from '@fortawesome/free-solid-svg-icons'
import navStyles from '../styles/nav-bar.module.scss';
import Link from "next/link";
import ThemeSwitch from "./theme-switch";
import { useRouter } from 'next/router';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null); // reference to the nav-toggle
  const router = useRouter();

  useEffect(() => {
    function handleClick(event) {
      // make sure the event.target is not fired from the dropdown toggle
      // to calling setMenuOpen twice
      if (menuOpen && ref.current && !ref.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    // listen to the mouseup event and unregister it when the useEffect is cleaned up
    document.addEventListener("mouseup", handleClick);
    return () => {
      document.removeEventListener("mouseup", handleClick);
    };
  }, [menuOpen]);

  return (
    <nav className={ classNames(navStyles.navbar) }>
      <ul className={ classNames(navStyles['nav-list'], (menuOpen ? navStyles.responsive : "") ) }>
        <li className={classNames(navStyles['nav-item-brand'], (router.pathname === '/' ? navStyles.active : ""))}>
          <Link href="/" passHref>
            <a className={ classNames(navStyles['nav-link'], navStyles['nav-brand-name']) }>
              <FontAwesomeIcon icon={faHome} size={'2x'} className={ classNames(navStyles['svg-icon'])} />
              <span className={ classNames(navStyles['link-text'])}>Home</span>
            </a>
          </Link>
        </li>
        <li className={classNames(navStyles['nav-item'], (router.pathname === '/blog' ? navStyles.active : ""))}>
          <Link href="/blog" passHref>
          <a className={ classNames(navStyles['nav-link']) }>
            <FontAwesomeIcon icon={faBlog} size={'2x'} className={ classNames(navStyles['svg-icon'])} />
            <span className={ classNames(navStyles['link-text'])}>Blog</span>
          </a>
          </Link>
        </li>
        <li className={classNames(navStyles['nav-item'], (router.pathname === '/vlog' ? navStyles.active : ""))}>
          <Link href="/vlog" passHref>
            <a className={ classNames(navStyles['nav-link']) }>
              <FontAwesomeIcon icon={faVideo} size={'2x'} className={ classNames(navStyles['svg-icon'])} />
              <span className={ classNames(navStyles['link-text'])}>Vlog</span>
            </a>
          </Link>
        </li>
        <li className={classNames(navStyles['nav-item'], (router.pathname === '/gallery' ? navStyles.active : ""))}>
          <Link href="/gallery" passHref>
            <a className={ classNames(navStyles['nav-link']) }>
              <FontAwesomeIcon icon={faTh} size={'2x'} className={ classNames(navStyles['svg-icon'])} />
              <span className={ classNames(navStyles['link-text'])}>Gallery</span>
            </a>
          </Link>
        </li>
        <ThemeSwitch />
        <li ref={ref} className={ classNames(navStyles['nav-item'], navStyles['nav-toggle'], navStyles['icon'])} onClick={() => setMenuOpen(!menuOpen)}>
          <div className={classNames(navStyles['nav-link'])}>
            <FontAwesomeIcon icon={faBars} size={'2x'} className={ classNames(navStyles['svg-icon'])} />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;