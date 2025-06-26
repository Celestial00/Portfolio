import { useState } from "react";
import WorkEdu from "./WorkEdu";

export default function Section() {
  const [selected, setSelected] = useState("work");

  const ToggleMenu = (on) => {
    setSelected(on);
  };

  const workExperience = [
    {
      title: "Frontend & Backend Intern",
      place: "LoftSoft (Software House)",
      description:
        "Worked on full-stack development projects using React for the frontend and Express.js for backend services. Used MongoDB as the primary database.",
      date: " 2/4/2023 - 2/7/2023 (Completed Internship) ",
      projects: ["React-based Dashboard", "Express API with MongoDB"],
    },
    {
      title: "Backend Developer Intern",
      place: "Verios",
      description:
        "Currently working as a Backend Intern using the MERN Stack. Focused on building scalable backend systems and integrating frontend APIs.",
      date: "Ongoing Internship",
      projects: ["Backend API Development", "MERN Stack Integration"],
    },
  ];

  const educationBackground = [
    {
      title: "Bachelor of Software Engineering",
      place: "Mehran University of Engineering and Technology",
      description:
        "Pursued core software engineering subjects including algorithms, databases, and web development. Developed practical and research-based projects.",
      date: "Graduation Expected / Completed 12/1/2025",
      projects: ["AI-Based Pattern Detection in E-commerce"],
    },
  ];

  return (
    <div>
      <div className=" mt-20  flex justify-center items-center text-white ">
        <div
          onClick={() => ToggleMenu("work")}
          className={
            selected === "work"
              ? "border-1 p-3 cursor-pointer  rounded-sm border-[#FF6A00] text-[#FF6A00]"
              : "cursor-pointer p-3"
          }
        >
          {" "}
          <h1 className="text-2xl">Work</h1>
        </div>
        <div
          onClick={() => ToggleMenu("education")}
          className={
            selected === "education"
              ? "border-1 p-3 cursor-pointer  rounded-sm border-[#FF6A00] text-[#FF6A00]"
              : "cursor-pointer p-3"
          }
        >
          <h1 className="text-2xl">Education</h1>
        </div>
      </div>
      <div>
        
        {selected === "work"
          ? workExperience.map((exp, index) => (
              <WorkEdu
                key={index}
                Title={exp.title}
                Place={exp.place}
                Date={exp.date}
                Desc={exp.description}
                project={exp.projects}
              />
            ))
          : educationBackground.map((exp, index) => (
              <WorkEdu
                key={index}
                Title={exp.title}
                Place={exp.place}
                Date={exp.date}
                Desc={exp.description}
                project={exp.projects}
              />
            ))}
      </div>
    </div>
  );
}
