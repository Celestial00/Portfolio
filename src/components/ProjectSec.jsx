import { PiArrowCircleRight } from "react-icons/pi";
import { Link } from "react-router-dom";
import ProjectBox from "./ProjectBox";
import projectData from "../constants/projectsData";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectSec() {
  const [ProData, setProData] = useState(projectData);

  return (
    <>
      <div className="mt-10 mb-10 ">
        <Link to={"/projects"}>
          {" "}
          <div className="flex justify-between mt-8 mb-8 items-center cursor-pointer">
            <div className="text-white dark:text-black text-2xl">Projects</div>
            <div className=" flex gap-2 items-center justify-center dark:text-black text-white hover:text-[#FF6A00]">
              <p>view more </p> <PiArrowCircleRight className="w-5 h-5" />
            </div>
          </div>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          {ProData.length > 0 && (
            <AnimatePresence>
              {ProData.map((Data, index) => (
                <motion.div
                  key={Data.title + index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  <ProjectBox
                    Title={Data.title}
                    Desc={Data.description}
                    Image={Data.image}
                    Techno={Data.technologies}
                    Github={Data.github}
                    Live={Data.Live}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
      </div>
    </>
  );
}
