import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandMongodb, TbBrandFlutter } from "react-icons/tb";
import { IoFlaskOutline } from "react-icons/io5";

export default function TechStackPage() {
  const techStack = [
    { name: "Nodejs", icon: FaNodeJs },
    { name: "Expressjs", icon: SiExpress },
    { name: "Nextjs", icon: RiNextjsLine },
    { name: "MongoDB", icon: TbBrandMongodb },
    { name: "Flask", icon: IoFlaskOutline },
    { name: "Tailwindcss", icon: RiTailwindCssFill },
    { name: "React", icon: FaReact },
    { name: "Flutter", icon: TbBrandFlutter },
  ];

  return (
    <>
      <div className=" w-full flex flex-col my-13 gap-y-3 ">
        {techStack.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <div key={index} className="flex items-center gap-5">
              <div className=" flex flex-col items-center justify-center gap-2 cursor-pointer rounded-xl border dark:border-gray-300 border-gray-500 text-white  p-4 ">
                <Icon className="text-3xl text-[#FF6A00]" />
                <span className="text-[11px] text-center text-gray-400">
                  {tool.name}
                </span>
              </div>
              <div className="flex items-center">
                <div className=" w-[500px] h-7  bg-[#FF6A00] "></div>
                <div className=" w-7 rounded-sm bg-blue-50 h-12"></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
