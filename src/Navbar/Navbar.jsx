import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { signOut } from "firebase/auth";
import auth from "../Firebase/Firebase";
const Navbar = () => {
  const handleLogOut = () => {
    // logout functionality
    signOut(auth)
      .then(() => {})
      .catch(() => {});
  };

  const navLinks = (
    <>
      <NavLink className="mx-4">
        <li>Home</li>
      </NavLink>
      <NavLink className="mx-4">
        <li>About</li>
      </NavLink>
      <NavLink className="mx-4">
        <li>Services</li>
      </NavLink>
      <NavLink className="mx-4">
        <li>Blog</li>
      </NavLink>
      <NavLink className="mx-4">
        <li>Contacts</li>
      </NavLink>
      <NavLink className="mx-4" to="/login">
        <li>Login</li>
      </NavLink>
      <NavLink className="" to="/login">
        <li>
          <button onClick={handleLogOut}>LogOut</button>
        </li>
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 h-28 mb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl">
          <img src={logo} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-secondary">Secondary</button>
      </div>
    </div>
  );
};

export default Navbar;
