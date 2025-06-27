import { SlSocialGithub } from "react-icons/sl";
import { Link } from "react-router-dom";
export default function ProjectBox({ Title, Desc, Image, Techno, Github }) {
  return (
    <div className="flex flex-col cursor-pointer   rounded-sm border-[1.5px] border-gray-800 w-80 h-80 overflow-hidden">
      {/* Image fills this box */}

      <div className="w-full h-1/2">
        <img
          className="w-full h-full object-cover bg-black opacity-80"
          src={Image}
          alt="Project"
        />
      </div>

      <div className=" p-3">
        <div className="">
          <h1 className="text-xl text-white">{Title}</h1>
        </div>
        <div className="text-gray-400 mt-1 text-[11px] ">
          <p>{Desc}</p>
        </div>
      </div>

      <div className="flex px-3 gap-1 flex-wrap">
        {Techno.map((t) => (
          <div className="text-white p-[4px] text-[11px] bg-gray-800 rounded-sm">
            {t}
          </div>
        ))}
      </div>

      <Link to={Github} target="_blank">
        <div className="px-3 py-4">
          <SlSocialGithub className="    h-5 w-5 text-[#FF6A00]" />
        </div>
      </Link>
    </div>
  );
}
