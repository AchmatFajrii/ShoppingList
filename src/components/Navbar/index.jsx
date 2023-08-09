import { BiShoppingBag } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <nav className="nav flex justify-center max-w-[500px] mx-auto items-center text-center bg-blue-500 py-0 px-[16px] h-[55px]">
        <span className="nav-icon text-[30px] mr-2 text-white">
          <BiShoppingBag />
        </span>
        <h1 className="nav-title text-white text-[24px] font-bold">
          Shopping List
        </h1>
      </nav>
    </>
  );
};

export default Navbar;
