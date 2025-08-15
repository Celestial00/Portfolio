import { Link } from "react-router-dom";
import { PiArrowCircleRight } from "react-icons/pi";

import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandMongodb, TbBrandFlutter } from "react-icons/tb";
import { IoFlaskOutline } from "react-icons/io5";

import { motion } from "framer-motion";

const techStack = [
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "Next.js", icon: RiNextjsLine },
  { name: "MongoDB", icon: TbBrandMongodb },
  { name: "Flask", icon: IoFlaskOutline },
  { name: "Tailwindcss", icon: RiTailwindCssFill },
  { name: "React", icon: FaReact },
  { name: "Flutter", icon: TbBrandFlutter },
];

export default function TechStackPage() {
  const techStack = [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "Next.js", icon: RiNextjsLine },
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
            <div>
              <div
                key={index}
                className="  flex flex-col items-center justify-center gap-2 cursor-pointer rounded-xl border dark:border-gray-300 border-gray-500 text-white  p-4 "
              >
                <Icon className="text-3xl text-[#FF6A00]" />
                <span className="text-[11px] text-center text-gray-400">
                  {tool.name}
                </span>
              </div>

              {/*  */}


              <div className=" flex-1">


              </div>

            </div>
          );
        })}
      </div>
    </>
  );
}
