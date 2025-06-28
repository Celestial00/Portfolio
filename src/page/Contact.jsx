import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { TfiEmail } from "react-icons/tfi";
import { RxInstagramLogo } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Contact() {
  const form = useRef();

  const [data, setData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const HandleData = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const HandleSend = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hboz3yr",
        "template_gv55wrr",
        form.current,
        "_qkOEWO7cLGCy4maA"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          setData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="my-10">
      <div className="text-white my-10">
        <h1 className="text-4xl md:text-5xl  font-semibold">Contact Me</h1>
      </div>

      <form ref={form} onSubmit={HandleSend}>
        <div className="flex flex-col md:flex-row text-white gap-2">
          <div className="cursor-pointer border-[1.5px] w-full my-2 px-5 py-5 border-gray-800">
            <input
              type="text"
              name="from_name"
              value={data.name}
              placeholder="Name"
              onChange={HandleData}
              required
              className="w-full appearance-none bg-transparent border-none outline-none text-white"
            />
          </div>

          <div className="cursor-pointer border-[1.5px] w-full my-2 px-5 py-5 border-gray-800">
            <input
              type="email"
              name="from_email"
              value={data.email}
              placeholder="Email"
              onChange={HandleData}
              required
              className="w-full outline-none text-white bg-transparent"
            />
          </div>
        </div>

        <div className="cursor-pointer border-[1.5px] w-full my-2 px-5 py-5 border-gray-800">
          <textarea
            name="message"
            value={data.message}
            placeholder="Contact Me Regarding Any Project Or Just Say Hi"
            onChange={HandleData}
            required
            className="h-40 w-full outline-none text-white bg-transparent"
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full flex justify-center py-3 rounded-sm bg-orange-500 cursor-pointer text-white font-semibold hover:bg-orange-600 transition"
        >
          Send
        </button>
      </form>

      <div className=" flex flex-col gap-2 mt-10  text-[15px] text-gray-500">
        <p> If you don't like forms below is my email and Social Handle </p>

        <div className=" flex gap-1 items-center hover:text-[#FF6A00] ">
          <TfiEmail />
          <p>SheerazAlee223@Gmail.com</p>
        </div>

        <div className=" flex gap-1 items-center hover:text-[#FF6A00] ">
          <RxInstagramLogo />
          <Link
            className=" "
            to="https://www.instagram.com/sheerazalee_/?hl=en"
            target="_black"
          >
            https://www.instagram.com/sheerazalee_/?hl=en
          </Link>
        </div>
      </div>
    </div>
  );
}
