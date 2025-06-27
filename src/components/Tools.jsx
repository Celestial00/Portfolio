import { Link } from "react-router-dom";
import { PiArrowCircleRight } from "react-icons/pi";

import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandMongodb, TbBrandFlutter } from "react-icons/tb";
import { IoFlaskOutline } from "react-icons/io5";

import { motion } from "framer-motion";

const techStack = [
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "Next.js", icon: RiNextjsLine },
  { name: "MongoDB", icon: TbBrandMongodb },
  { name: "Flask", icon: IoFlaskOutline },
  { name: "Flutter", icon: TbBrandFlutter },
];

export default function Tools() {
  return (
    <div className="mt-10 mb-10">
      <Link to="/projects">
        <div className="flex justify-between mt-8 mb-8 items-center cursor-pointer">
          <div className="text-white text-2xl">Tech Stack</div>
          <div className="flex gap-2 items-center text-white hover:text-[#FF6A00]">
            <p>view more</p> <PiArrowCircleRight className="w-5 h-5" />
          </div>
        </div>
      </Link>

      {/* Animate the whole tech stack container */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {techStack.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 cursor-pointer rounded-xl border border-gray-500 text-white hover:scale-105 transition-transform p-4 w-[100px] h-[100px] basis-1/3 max-w-[120px]"
            >
              <Icon className="text-3xl text-[#FF6A00]" />
              <span className="text-[11px] text-center text-gray-400">
                {tool.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
