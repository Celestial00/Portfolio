import blogData from "../constants/blogData";
import BlogBox from "../components/BlogBox";
import { useState } from "react";

export default function Blog() {
  const [blog, setBlog] = useState(blogData);
  const [searching, setSearching] = useState(false);
  const [filteredList, setFilteredList] = useState([]);

  const HandleSearch = (e) => {
    setSearching(true);
    const SearchValue = e.target.value.toLowerCase();
    console.log(SearchValue);
    setFilteredList(
      blog.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    console.log(filteredList);
  };

  return (
    <>
      <div className="text-white ">
        <h1 className="text-5xl font-semibold my-10">My Blog</h1>
      </div>
      <div className="">
        <div className="flex items-center justify-center gap-5">
          {" "}
          <div className="cursor-pointer border-[1.5px] w-full  my-2 px-5 py-5 border-gray-800">
            <input
              type="text"
              placeholder="Search.."
              onChange={(e) => HandleSearch(e)}
              className=" w-full outline-none text-white "
            />
          </div>
          <div className=" w-20 flex justify-center h-17 rounded-sm cursor items-center bg-orange-500 cursor-pointer  hover:bg-orange-600 transition">
            clear
          </div>
        </div>

        <div className="flex flex-wrap">
          {searching
            ? filteredList.map((blog, index) => (
                <BlogBox
                  key={index}
                  Title={blog.title}
                  Desc={blog.description}
                  Date={blog.date}
                />
              ))
            : blog.map((blog, index) => (
                <BlogBox
                  key={index}
                  Title={blog.title}
                  Desc={blog.description}
                  Date={blog.date}
                />
              ))}
        </div>
      </div>
    </>
  );
}
