import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import BlogBox from "./BlogBox";
import blog from "../constants/blogData";
import { motion, AnimatePresence } from "framer-motion";

export default function Blog() {
  return (
    <div>
      <Link to={"/blog"}>
        {" "}
        <div className="flex justify-between mt-8 mb-8 items-center cursor-pointer">
          <div className="text-white text-2xl">blogs</div>
          <div className=" flex gap-1 items-center justify-center text-gray-500 hover:text-[#FF6A00]">
            <p>view more </p> <MdArrowForwardIos className="w-4 h-4" />
          </div>
        </div>
      </Link>

      <div className="flex flex-wrap">
        <AnimatePresence>
          {blog.slice(0, 3).map((blog, index) => (
            <motion.div
              key={blog.title + index}
              initial={{ opacity: 0, x: -50 }} // starts left
              animate={{ opacity: 1, x: 0 }} // animates into place
              exit={{ opacity: 0, x: 50 }} // fades out to right (optional)
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <BlogBox
                Id={blog.id}
                Title={blog.title}
                Desc={blog.description.replace(/<[^>]*>/g, "")}
                Date={blog.date}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
