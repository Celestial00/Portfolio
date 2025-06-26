import {
  SlSocialLinkedin,
  SlSocialGithub,
  SlCloudDownload,
} from "react-icons/sl";

import { Link } from "react-router-dom";

export default function Hero() {

  return (
    <div className="flex flex-col-reverse md:flex-row mt-20 justify-between items-center gap-10">
      <div className="text-center md:text-left">
        <h1 className="text-white text-4xl md:text-6xl font-semibold">
          Hi, I'm Shiraz
        </h1>
        <p className="text-sm text-white">24 Years Old SWE From Pakistan</p>
        <p className="text-gray-400 mt-5">
          Full Stack Developer Specializing in MERN Stack & AI
          <br /> Integration Open to New Opportunities
        </p>

        <div className="flex mt-5 gap-5 items-center justify-center md:justify-start">
          <a href="/assets/SheerazAli.pdf" download>
            <div className="border flex gap-3 justify-center items-center rounded-sm border-gray-500 text-gray-500 hover:border-[#FF6A00] hover:text-[#FF6A00] cursor-pointer p-1 px-1.5 text-[15px]">
              Resume
              <SlCloudDownload />
            </div>
          </a>

          <Link to="https://www.linkedin.com/in/sheerazwahab/" target="_black">
            <SlSocialLinkedin className="w-6 h-6 text-gray-500 hover:text-[#FF6A00]" />
          </Link>
          <Link to={"https://github.com/Celestial00"} target="_blank">
            <SlSocialGithub className="w-6 h-6 text-gray-500 hover:text-[#FF6A00]" />
          </Link>
        </div>
      </div>

      <img
        className="rounded-sm w-40 h-40 bg-black opacity-90"
        src={"/assets/me.jpeg"}
      />
    </div>
  );
}
