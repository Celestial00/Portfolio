import { Link } from "react-router-dom";
import { PiSunBold } from "react-icons/pi";
import useMood from "../hooks/useMood";
import { IoMoonOutline } from "react-icons/io5";

export default function Navbar() {
  const [themeData, setTheme] = useMood();
  return (
    <div className=" xs:flex-col md:flex-row flex dark:text-black  justify-between items-center text-white mt-5 ">
      <div>
        <Link to={"/"}>
          {" "}
          <h1 className={`text-2xl font-semibold cursor-pointer  `}>
            Shiraz<span className="text-[#FF6A00]">.</span>
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-4 text-md">
        <Link className=" hover:text-[#FF6A00]" to="/projects">
          Projects
        </Link>
        <Link className=" hover:text-[#FF6A00]" to="/blog">
          Blog
        </Link>
        <Link className=" hover:text-[#FF6A00]" to="/contact">
          Contact
        </Link>

        <div className="cursor-pointer" onClick={() => setTheme()}>
          {themeData ? (
            <IoMoonOutline className="text-blue-400 " />
          ) : (
            <PiSunBold className=" text-[#FF6A00] " />
          )}
        </div>
      </div>
    </div>
  );
}
