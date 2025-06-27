import { useParams } from "react-router-dom";
import BlogData from "../constants/blogData";
import { useState } from "react";

export default function View() {
  const { ParamId } = useParams();
  const [isImageLoading, setIsImageLoading] = useState(true);

  const [data, setData] = useState(() =>
    BlogData.find((data) => data.id === ParamId)
  );

  return (
    <div key={data.id} className="text-white my-20">
      <div className=" flex flex-col     ">
        <h1 className="text-4xl justify-center items-center font-semibold">
          {data.title}
        </h1>

        <p className=" text-[11px] mt-1 hover:text-[#FF6A00] cursor-pointer text-gray-400 ">
          2/2/2025
        </p>
      </div>

      {isImageLoading && (
        <div className=" w-full h-100 absolute md:top-50 md:right-10 flex justify-center items-center">
          <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-[#FF6A00]"></div>
        </div>
      )}

      <img
        className={`w-full h-100 my-10 rounded-sm object-cover  ${
          isImageLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsImageLoading(false)}
        src={data.image}
      ></img>

      <div
        className="blog-content text-white space-y-4"
        dangerouslySetInnerHTML={{ __html: data.description }}
      ></div>

      <div className="text-white my-5">Tags</div>
      <div className=" flex flex-col md:flex-row  gap-2">
        {data.tags.map((tag) => (
          <p className="text-sm text-white p-2 rounded-sm bg-gray-800">{tag}</p>
        ))}
      </div>
    </div>
  );
}
