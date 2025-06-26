import { PiArrowCircleRight } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function ProjectSec() {
  return (
    <>
      <Link to={"/projects"}>
        {" "}
        <div className="flex justify-between mt-8 mb-8 items-center cursor-pointer">
          <div className="text-white text-2xl">Projects</div>
          <div className=" flex gap-2 items-center justify-center text-white hover:text-[#FF6A00]">
            <p>view more </p> <PiArrowCircleRight className="w-5 h-5" />
          </div>
        </div>
      </Link>
    </>
  );
}
