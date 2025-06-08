import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Assuming you have these icons installed

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">MyLogo</div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-gray-700">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul
          className={`md:flex md:space-x-8 md:static absolute top-16 left-0 w-full bg-white md:bg-transparent md:w-auto transition-all duration-300 ease-in ${
            open ? 'block' : 'hidden'
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-4 py-2 ${
                  isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
                } hover:text-blue-500`
              }
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-4 py-2 ${
                  isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
                } hover:text-blue-500`
              }
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-4 py-2 ${
                  isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
                } hover:text-blue-500`
              }
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user"
              className={({ isActive }) =>
                `block px-4 py-2 ${
                  isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
                } hover:text-blue-500`
              }
              onClick={() => setOpen(false)}
            >
              USER
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/github"
              className={({ isActive }) =>
                `block px-4 py-2 ${
                  isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
                } hover:text-blue-500`
              }
              onClick={() => setOpen(false)}
            >
              Github
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
