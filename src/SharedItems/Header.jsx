import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import favicon from "../../public/favicon.png";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
console.log(user)
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="  flex md:justify-around my-5 items-center">
      <div className="flex items-center">
        <img className="w-20  md:w-28 rounded-xl px-1 md:px-4" src={favicon} alt="logo" />
        <h1 className=" text-lg md:text-4xl font-bold ">Chef Hunter</h1>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-sm text-base md:text-xl "
              : "text-gray-600 font-sm text-base md:text-xl"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold text-base md:text-xl "
              : "text-gray-600 font-sm text-base md:text-xl"
          }
        >
          Blog
        </NavLink>
      </div>
      <div className='flex items-center md:gap-4 md:mx-10'>
             { 
             user ? <div className=' md:ml-5 tooltip' data-tip= {user?.displayName ||user?.email} >
              <img  className='h-12 rounded-full w-28 md:h-12 md:w-12'  src={user?.photoURL} alt="" />
             </div> : 
             <div className='ml-5'>
             <FaUserCircle size={46}></FaUserCircle>
             </div>
             }

        {!user ? (
          <Link to={"/login"}>
            <button className="btn btn-primary md:ml-4 mr-1">Login</button>
          </Link>
        ) : (
          <button onClick={handleLogOut} className="btn btn-primarymr-1 md:ml-4">
            LogOut
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
