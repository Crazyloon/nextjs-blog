import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavLink = ({url, text, icon, display, active, brand}) => {
  return ( 
    <li className={`h-9 float-left justify-center align-center text-xl hover:bg-secondary-hover cursor-pointer transition-colors m-0 ${active ? 'bg-secondary text-font-color' : ''} ${display ? 'block float-none' : 'hidden lg:block'}`}>
          <Link href={url} passHref>
            <a className='flex px-3 py-1 items-center visited:text-link-text hover:no-underline'>
              <FontAwesomeIcon icon={icon} size={'2x'} className='w-[20px] h-[20px]' />
              <span className='ml-4 mr1'>{text}</span>
            </a>
          </Link>
        </li>
   );
}
 
export default NavLink;