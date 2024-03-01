/*
Author: @emin1731

- It should be fixed
- need to add burger menu
*/
import {NavLink} from "react-router-dom";
const Navbar = () => {
  return(
      <nav className='bg-gray-200 w-full h-20 flex justify-between items-center px-24 size-10 text-2xl cursor-pointer sticky top-0 z-50'>
          <NavLink to='/'>
              <div className='cursor-pointer hover:text-primary'>
                  Chat
              </div>
          </NavLink>
        <div className='flex justify-between gap-7'>
            <NavLink to='/chat'>
              <div className='cursor-pointer hover:text-primary'>
                Chat
              </div>
            </NavLink>
            <NavLink to='/services'>
              <div className='cursor-pointer hover:text-primary'>
                Services
              </div>
            </NavLink>
        </div>
      </nav>
  );
};

export default Navbar;
