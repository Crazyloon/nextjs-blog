import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

const NavToggle = ({isOpen, setMenuOpen, icon}) => {
  const ref = useRef(null); // reference to the nav-toggle

  useEffect(() => {
    function handleClick(event) {
      // make sure the event.target is not fired from the dropdown toggle
      // to calling setMenuOpen twice
      if (isOpen && ref.current && !ref.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    // listen to the mouseup event and unregister it when the useEffect is cleaned up
    document.addEventListener("mouseup", handleClick);
    return () => {
      document.removeEventListener("mouseup", handleClick);
    };
  }, [isOpen]);

  return ( 
    <li ref={ref} className={`text-link-text absolute top-0 right-0 bg-navbar text-xl justify-center align-center hover:bg-secondary-hover cursor-pointer transition-colors m-0 float-right block lg:hidden ${isOpen ? 'float-none text-left' : ''}`} onClick={() => setMenuOpen(!isOpen)}>
      <div className='h-9 flex px-3 py-1 items-center grow-[1]'>
        <FontAwesomeIcon icon={icon} size={'2x'} className='w-[20px] h-[20px]' />
      </div>
    </li>
   );
}
 
export default NavToggle;