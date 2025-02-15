import { useContext, } from "react";
import { NavLink } from "react-router-dom";
import Image1 from "/assets/PastFinder1.jpg";
import { FaUserCircle} from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

const linkDrop = (
  <>
    <li className="hover:bg-gradient-to-r hover:from-yellow-950 hover:to-orange-700 hover:text-white font-semibold mb-1 hover:rounded-2xl lg:text-2xl md:text-base">
    <NavLink
      to="myProfile"
      className={({ isActive }) =>
        isActive
          ? "bg-gradient-to-r from-yellow-950  to-orange-700 text-white font-semibold rounded-2xl px-3 py-2"
          : "px-3 py-2"
      }
    >
      My Profile
    </NavLink>
  </li>
  <li className="hover:bg-gradient-to-r hover:from-yellow-950 hover:to-orange-700 hover:text-white font-semibold mb-1 hover:rounded-2xl lg:text-2xl md:text-base">
    <NavLink
      to="myArtifacts"
      className={({ isActive }) =>
        isActive
          ? "bg-gradient-to-r from-yellow-950  to-orange-700 text-white font-semibold rounded-2xl px-3 py-2"
          : "px-3 py-2"
      }
    >
      My Artifacts
    </NavLink>
  </li>
  <li className="hover:bg-gradient-to-r hover:from-yellow-950 hover:to-orange-700 hover:text-white font-semibold mb-1 hover:rounded-2xl lg:text-2xl md:text-base">
    <NavLink
      to="likedArtifacts"
      className={({ isActive }) =>
        isActive
          ? "bg-gradient-to-r from-yellow-950  to-orange-700 text-white font-semibold rounded-2xl px-3 py-2"
          : "px-3 py-2"
      }
    >
      Liked Artifacts
    </NavLink>
  </li>
  
  </>
);

  const links = (
<>
  <li className="hover:bg-gradient-to-r hover:from-yellow-950 hover:to-orange-700 hover:text-white font-semibold hover:rounded-2xl lg:text-2xl md:text-base">
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? "bg-gradient-to-r from-yellow-950  to-orange-700 text-white font-semibold rounded-2xl px-3 py-2 lg:text-2xl md:text-base"
          : "px-3 py-2 lg:text-2xl md:text-base"
      }
    >
      Home
    </NavLink>
  </li>
  
  <li className="hover:bg-gradient-to-r hover:from-yellow-950 hover:to-orange-700 hover:text-white font-semibold hover:rounded-2xl lg:text-2xl md:text-base">
    <NavLink
      to="allArtifacts"
      className={({ isActive }) =>
        isActive
          ? " bg-gradient-to-r from-yellow-950  to-orange-700 text-white font-semibold rounded-2xl px-3 py-2 lg:text-2xl md:text-base "
          : "px-3 py-2 lg:text-2xl md:text-base"
      }
    >
    All Artifacts
</NavLink>
  </li>
  {user?.email && (
  <li className="hover:bg-gradient-to-r hover:from-yellow-950 hover:to-orange-700 hover:text-white font-semibold hover:rounded-2xl">
    <NavLink
      to="addArtifacts"
      className={({ isActive }) =>
        isActive
          ? "bg-gradient-to-r from-yellow-950  to-orange-700 text-white font-semibold rounded-2xl px-3 py-2 lg:text-2xl md:text-base"
          : "px-3 py-2 lg:text-2xl md:text-base"
      }
    >
      Add Artifacts
    </NavLink>
  </li>
  
    )}

{user?.email && (
  <li className="hover:bg-gradient-to-r hover:from-yellow-950 hover:to-orange-700 hover:text-white font-semibold hover:rounded-2xl">
    <NavLink
      to="VlogPage"
      className={({ isActive }) =>
        isActive
          ? "bg-gradient-to-r from-yellow-950  to-orange-700 text-white font-semibold rounded-2xl px-3 py-2 lg:text-2xl md:text-base"
          : "px-3 py-2 lg:text-2xl md:text-base"
      }
    >
      Vlogs
    </NavLink>
  </li>
  
    )}


  <li className="hover:bg-gradient-to-r hover:from-yellow-950 hover:to-orange-700 hover:text-white font-semibold hover:rounded-2xl">
    <NavLink
      to="aboutUs"
      className={({ isActive }) =>
        isActive
          ? "bg-gradient-to-r from-yellow-950  to-orange-700 text-white font-semibold rounded-2xl px-3 py-2 lg:text-2xl md:text-base"
          : "px-3 py-2 lg:text-2xl md:text-base"
      }
    >
      About Us
    </NavLink>
  </li>


</>
  );

  return (
    <div className="navbar bg-base-100/85 z-50 sticky top-0 ">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost md:hidden"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="flex items-center cursor-pointer">
          <img className="lg:w-20 md:w-14 w-12" src={Image1} alt="Sunflower Logo" />
          <span className="font-bold lg:text-3xl md:text-2xl text-lg">Celestora</span>
        </NavLink>
      </div>

      <div className="navbar-center max-sm:hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 px-1 text-xl">{links}</ul>
      </div>

{/* User Profile & Log In */}
      <div className="navbar-end flex items-center gap-4">
        
        <div className="flex items-center   rounded-3xl">
          {user?.email ? (

<div className="dropdown dropdown-end">
  {/* Dropdown button */}
  <button
    tabIndex={0}
    className="btn btn-ghost btn-circle mr-2 avatar"
    aria-label="Open user menu"
  >
    <div className="w-10 rounded-full">
      <img
        className="w-12 h-12 rounded-full border-2 border-yellow-700"
        alt={user?.displayName}
        src={user?.photoURL}
      />
    </div>
  </button>

  {/* Dropdown menu */}
  <ul
    tabIndex={0}
    className="menu menu-sm dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-52 p-2 shadow dropdown-start"
  >
    {linkDrop}
    <li className="w-28 mt-3 ml-10">
      <button
        onClick={logOut}
        className="px-5 py-2 text-center rounded-3xl md:text-lg text-sm font-semibold border-yellow-800 hover:bg-gradient-to-r from-yellow-950  to-orange-700 text-black hover:text-white border"
      >
        Log Out
      </button>
    </li>
  </ul>
</div>


  
          ) : (
            
            <div className="flex items-center gap-2">
            <FaUserCircle className="md:size-10 size-8  text-yellow-800" />
            <NavLink
              to="login"
              className="px-5 py-2  rounded-3xl md:text-xl text-xs font-semibold bg-gradient-to-r from-yellow-950  to-orange-700 border text-white"
            >
              Log In
            </NavLink>
            </div>
          )}
        </div>

      </div>
      
    </div>
  );
};

export default Navbar;