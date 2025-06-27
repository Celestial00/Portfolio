import {
  SlSocialLinkedin,
  SlSocialGithub,
  SlCloudDownload,
} from "react-icons/sl";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function Hero() {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <div className="flex flex-col-reverse md:flex-row mt-20 justify-between items-center gap-10">
      <div className="text-center md:text-left">
        <h1 className="text-white text-4xl md:text-5xl font-semibold">
          Hi, I'm Shiraz
        </h1>
        <p className="text-sm text-white">24 Years Old SWE From Pakistan</p>
        <p className="text-gray-400 mt-5">
          Full Stack Developer Specializing in MERN Stack & AI
          <br className=" hidden md:block " /> Integration Open to New
          Opportunities
        </p>

        <div className="flex mt-5 gap-5 items-center justify-center md:justify-start">
          <a href="/assets/SheerazAli.pdf" download>
            <div className="border flex gap-3 justify-center items-center rounded-sm border-gray-500 text-gray-500 hover:border-[#FF6A00] hover:text-[#FF6A00] cursor-pointer p-1 px-1.5 text-[15px]">
              Resume
              <SlCloudDownload />
            </div>
          </a>

          <Link to="https://www.linkedin.com/in/sheerazwahab/" target="_blank">
            <SlSocialLinkedin className="w-6 h-6 text-gray-500 hover:text-[#FF6A00]" />
          </Link>
          <Link to={"https://github.com/Celestial00"} target="_blank">
            <SlSocialGithub className="w-6 h-6 text-gray-500 hover:text-[#FF6A00]" />
          </Link>
        </div>
      </div>

      {/* Image Container */}
      <div className="relative w-40 h-40">
        {isImageLoading && (
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-[#FF6A00]"></div>
          </div>
        )}
        <img
          className={`rounded-sm w-full h-full object-cover bg-black transition-opacity duration-500 ${
            isImageLoading ? "opacity-0" : "opacity-100"
          }`}
          src="/assets/me.jpeg"
          alt="Sheeraz"
          onLoad={() => setIsImageLoading(false)}
        />
      </div>
    </div>
  );
}
