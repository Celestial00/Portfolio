import { useState } from "react";
import ProjectBox from "../components/ProjectBox";
import ProjectData from "../constants/projectsData";

export default function Projects() {
  const [ProData, setProData] = useState(ProjectData);

  return (
    <>
      {" "}
      <div className="text-white dark:text-black my-10">
        <h1 className="text-4xl md:text-5xl font-semibold">My Projects</h1>
      </div>
      <div className=" gap-8 grid grid-cols-1 place-items-center  lg:grid-cols-3 my-10 md:grid-cols-2  ">
        {ProData.map((Data, index) => (
          <ProjectBox
            key={index}
            Title={Data.title}
            Desc={Data.description}
            Image={Data.image}
            Techno={Data.technologies}
            Github={Data.github}
          />
        ))}
      </div>
    </>
  );
}
