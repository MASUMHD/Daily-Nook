import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const NavMenus = () => {
  

  const generateLinkClass = (isActive) =>
    `relative flex items-center gap-1 group px-2 py-1   
    ${isActive ? "text-[#634C9F]" : "text-black hover:text-[#634C9F]"} 
    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#634C9F] 
    after:transition-all after:duration-300 ${
      isActive ? "after:w-full" : "after:w-0 group-hover:after:w-full"
    }`;

  const NavLinks = (
    <>
      <NavLink to="/" className={({ isActive }) => generateLinkClass(isActive)}>
        <li>
          <p>Home</p>
        </li>
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive }) => generateLinkClass(isActive)}
      >
        <li>
          <p className="flex items-center gap-1">
            Shop <FaChevronDown size={12} />
          </p>
        </li>
      </NavLink>

      <NavLink
        to="/fruitsAndVegetables"
        className={({ isActive }) => generateLinkClass(isActive)}
      >
        <li>
          <p>Fruits & Vegetables</p>
        </li>
      </NavLink>

      <NavLink
        to="/beverages"
        className={({ isActive }) => generateLinkClass(isActive)}
      >
        <li>
          <p>Beverages</p>
        </li>
      </NavLink>

      <NavLink
        to="/blog"
        className={({ isActive }) => generateLinkClass(isActive)}
      >
        <li>
          <p>Blog</p>
        </li>
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) => generateLinkClass(isActive)}
      >
        <li>
          <p>Contact</p>
        </li>
      </NavLink>
    </>
  );

  const rightNavLinks = (
    <>
      <NavLink
        to="/trending"
        className={({ isActive }) => generateLinkClass(isActive)}
      >
        <li>
          <p className="flex items-center gap-1">
            Trending Products <FaChevronDown size={12} />
          </p>
        </li>
      </NavLink>

      <NavLink
        to="/almost-finished"
        className={({ isActive }) => generateLinkClass(isActive)}
      >
        <li>
          <p className="flex items-center gap-2 text-red-600">
            Almost Finished
            <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.2 rounded ml-1">
              SALE
            </span>
            <FaChevronDown size={12} />
          </p>
        </li>
      </NavLink>
    </>
  );

  return (
    <nav className="bg-[#A6FDC6]  md:px-6 lg:px-40 py-2">
      <div className="flex justify-between items-center">
        {/* Left Menu */}
        <ul className="flex items-center gap-4 md:gap-8 text-sm md:text-base font-semibold">
          {NavLinks}
        </ul>

        {/* Right Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm md:text-base font-semibold">
          {rightNavLinks}
        </ul>
      </div>
    </nav>
  );
};

export default NavMenus;
