import {
  SlSocialLinkedin,
  SlSocialGithub,
  SlCloudDownload,
} from "react-icons/sl";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" flex justify-between mb-5 mt-5 items-center ">
      <p className="text-sm text-gray-500"> © 2025 Sheeraz</p>

      <div className="flex gap-5 items-center justify-center md:justify-start">
        <Link to="https://www.linkedin.com/in/sheerazwahab/" target="_black">
          <SlSocialLinkedin className="w-6 h-6 text-gray-500 hover:text-[#FF6A00]" />
        </Link>
        <Link to={"https://github.com/Celestial00"} target="_blank">
          <SlSocialGithub className="w-6 h-6 text-gray-500 hover:text-[#FF6A00]" />
        </Link>
      </div>
    </div>
  );
}
