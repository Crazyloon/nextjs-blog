import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/theme-switch.module.scss';
import navStyles from '../styles/nav-bar.module.scss';
import classNames from 'classnames';

const ThemeSwitch = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const handleThemeToggle = (e) => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    if(darkTheme !== undefined && darkTheme){
      document.documentElement.setAttribute('data-theme', 'dark');
      window.localStorage.setItem('theme', 'dark');
    } 
    else {
      document.documentElement.removeAttribute('data-theme');
      window.localStorage.setItem('theme', 'light');
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue('--initial-color-mode');
    setDarkTheme(initialColorValue === 'dark');
  }, []);

  return ( 
    <li onClick={handleThemeToggle} className={styles['theme-switch']}>
      <div className={ classNames(navStyles['nav-link'])}>
        <FontAwesomeIcon size={'1x'} icon={faLightbulb} color={darkTheme ? "gray" : "gold"} />
        <span className={ classNames(navStyles['link-text'], styles['link-text'])}>{ darkTheme ? 'Light Mode' : 'Dark Mode'}</span>
      </div>
    </li>
   );
}
 
export default ThemeSwitch;