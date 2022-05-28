import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBrandLink = ({url, text, icon, active, display}) => {
  return ( 
    <li className={`h-9 float-left align-center text-xl hover:bg-secondary-hover cursor-pointer transition-colors m-0 ${active ? 'bg-secondary text-font-color' : ''} ${display ? 'float-none flex' : 'inline-flex'}`}>
          <Link href={url} passHref>
            <a className='flex px-3 py-1 items-center visited:text-link-text hover:no-underline'>
              <FontAwesomeIcon icon={icon} size={'2x'} className='w-[20px] h-[20px]' />
              <span className={`ml-4 mr1 ${display ? '' : 'hidden'}`}>{text}</span>
            </a>
          </Link>
        </li>
   );
}
 
export default NavBrandLink;