import { SlSocialLinkedin, SlSocialGithub } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function Footer() {
  const handleEmailCopy = () => {
    const email = "SheerazAlee223@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className=" flex justify-between mb-5 mt-5 items-center ">
      <p className="text-sm text-gray-500">
        {" "}
        © 2025 Sheeraz |{" "}
        <Link to="privacy" className=" hover:text-[#FF6A00]  ">
          {" "}
          Privacy Policy{" "}
        </Link>{" "}
      </p>

      <div className="flex gap-5 items-center justify-center md:justify-start">
        <Link to="https://www.linkedin.com/in/sheerazwahab/" target="_black">
          <SlSocialLinkedin className="w-5 h-5 text-gray-500 hover:text-[#FF6A00]" />
        </Link>
        <Link to={"https://github.com/Celestial00"} target="_blank">
          <SlSocialGithub className="w-5 h-5 text-gray-500 hover:text-[#FF6A00]" />
        </Link>
        <TfiEmail
          onClick={handleEmailCopy}
          className="w-5 h-5 cursor-pointer text-gray-500 hover:text-[#FF6A00]"
        />
      </div>
    </div>
  );
}
