import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" xs:flex-col md:flex-row flex  justify-between items-center text-white mt-5 ">
      <div>
        <Link to={"/"}>
          {" "}
          <h1 className="text-2xl font-semibold hover:text-[#FF6A00] cursor-pointer">
            Shiraz<span className=" text-[#FF6A00] ">.</span>
          </h1>
        </Link>
      </div>

      <div className="flex gap-4 text-md">
        <Link className=" hover:text-[#FF6A00]" to="/projects">
          Projects
        </Link>
        <Link className=" hover:text-[#FF6A00]" to="/blog">
          Blog
        </Link>
        <Link className=" hover:text-[#FF6A00]" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}
