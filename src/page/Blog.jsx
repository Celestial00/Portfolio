import blogData from "../constants/blogData";
import BlogBox from "../components/BlogBox";
import { useState } from "react";

export default function Blog() {
  const [blog, setBlog] = useState(blogData);
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const HandleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearching(true);
    setQuery(searchTerm);
    const filtered = blog.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
    setFilteredList(filtered);
  };

  return (
    <>
      <div className="text-white dark:text-black ">
        <h1 className="text-4xl md:text-5xl  font-semibold my-10">My Blog</h1>
      </div>
      <div className="">
        <div className="flex items-center justify-center gap-5">
          {" "}
          <div className="cursor-pointer border-[1.5px] w-full  my-2 px-5 py-5 dark:border-gray-300 border-gray-800">
            <input
              type="text"
              value={query}
              placeholder="Search.."
              onChange={(e) => HandleSearch(e)}
              className=" w-full outline-none dark:text-black text-white "
            />
          </div>
          <div
            onClick={() => {
              setQuery("");
              setSearching(false);
              setFilteredList([]);
            }}
            className=" w-20 flex justify-center h-17 rounded-sm cursor items-center bg-orange-500 cursor-pointer  hover:bg-orange-600 transition"
          >
            clear
          </div>
        </div>

        <div className="flex flex-wrap">
          {searching
            ? filteredList.map((blog, index) => (
                <BlogBox
                  Id={blog.id}
                  key={index}
                  Title={blog.title}
                  Desc={blog.description.replace(/<[^>]*>/g, "")}
                  Date={blog.date}
                />
              ))
            : blog.map((blog, index) => (
                <BlogBox
                  Id={blog.id}
                  key={index}
                  Title={blog.title}
                  Desc={blog.description.replace(/<[^>]*>/g, "")}
                  Date={blog.date}
                />
              ))}
        </div>
      </div>
    </>
  );
}
