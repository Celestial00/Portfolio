import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

export default function Contact() {
  const form = useRef();
  const [copied, setCopied] = useState(false);

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
          setData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send message. Try again.");
        }
      );
  };

  const handleEmailCopy = () => {
    const email = "SheerazAlee223@gmail.com"; // <-- Replace with your actual email
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="my-10">
      <div className="text-white my-10">
        <h1 className="text-4xl md:text-5xl font-semibold">Contact Me</h1>
      </div>

      <form ref={form} onSubmit={HandleSend}>
        <div className="flex flex-col md:flex-row text-white gap-2">
          <div className="cursor-pointer border-[1.5px] w-full my-2 px-5 py-5 border-gray-800">
            <input
              type="text"
              name="from_name"
              value={data.from_name}
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
              value={data.from_email}
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

      <div className="flex gap-1 mt-3 items-center cursor-pointer text-gray-500">
        <p>
          By submitting this form, I agree to the{" "}
          <Link className="hover:text-[#FF6A00]" to="privacy policy">
            privacy policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
