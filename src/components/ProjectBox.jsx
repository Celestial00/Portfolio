import { SlSocialGithub } from "react-icons/sl";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProjectBox({
  Title,
  Desc,
  Image,
  Techno,
  Github,
  Live,
}) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col  rounded-sm border-[1.5px] dark:border-gray-300 border-gray-800 w-full sm:w-80 h-75 overflow-hidden">
      <div className="relative w-full ">
        {loading && (
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-80">
            <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-[#FF6A00]"></div>
          </div>
        )}

        <img
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          src={Image}
          alt="Project"
          onLoad={() => setLoading(false)}
        />
      </div>

      <div className="p-3">
        <h1 className="text-xl dark:text-black text-white">{Title}</h1>
        <p className="text-gray-400 mt-1 text-[11px]">{Desc}</p>
      </div>

      <div className="flex px-3 gap-1 flex-wrap">
        {Techno.map((t, idx) => (
          <div
            key={idx}
            className="text-white p-[4px] text-[11px] bg-gray-800 rounded-sm"
          >
            {t}
          </div>
        ))}
      </div>

      <div className="flex gap-x-3 px-3 py-4">
        <Link to={Github} target="_blank">
          <div className="">
            <SlSocialGithub className="h-5 w-5 text-[#FF6A00]" />
          </div>
        </Link>

        {Live ? (
          <Link to={Live} target="_blank">
            <div className="">
              <HiOutlineStatusOnline className="h-5 w-5 text-[#FF6A00]" />
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
