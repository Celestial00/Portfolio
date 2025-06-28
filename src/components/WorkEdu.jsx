import React from "react";

export default function WorkEdu({ Title, Place, Date, Desc, project }) {
  return (
    <div className=" mt-5 rounded-sm border border-gray-800 dark:border-gray-300 p-5">
      <div className="flex justify-between items-center gap-2 md:gap-0  ">
        <div className=" flex items-center justify-center ">
          {/* <div className=" bg-gray-700 rounded-4xl w-10 h-10 "></div> */}
          <div className=" ">
            <p className="text-white text-xl dark:text-black  font-semibold">
              {Title}
            </p>
            <p className="text-gray-600 text-sm mt-1 cursor-pointer hover:text-[#FF6A00]">
              {Place}
            </p>
          </div>
        </div>
        <div className="">
          <p className=" text-[10px] md:text-[11px]  text-gray-400 cursor-pointer hover:text-[#FF6A00] ">
            {Date}
          </p>
        </div>
      </div>
      <p className="text-gray-400 text-sm mt-2"> {Desc} </p>
      <div className="">
        <p className="text-white mt-1">Project</p>
        {project.map((pro, index) => (
          <li key={index} className="mt-1 text-sm text-gray-400">
            {pro}
          </li>
        ))}
      </div>
    </div>
  );
}
