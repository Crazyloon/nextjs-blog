import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const ThemeSwitch = ({display}) => {
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
    <li onClick={handleThemeToggle} className={`float-right text-xl hover:bg-secondary-hover cursor-pointer transition-colors m-0 ${display ? 'flex float-none' : 'lg:flex'}`}>
      <div className='h-9 flex px-3 py-1 items-center'>
        <FontAwesomeIcon size={'1x'} icon={faLightbulb} color={darkTheme ? "gray" : "gold"} className='w-5 h-5' />
        <span className={`ml-4 mr-1 text-link-text ${display ? 'inline-block' : 'hidden'}`}>{ darkTheme ? 'Light Mode' : 'Dark Mode'}</span>
      </div>
    </li>
   );
}
 
export default ThemeSwitch;