import React from "react";

export default function BlogBox({ Title, Desc, Date }) {
  return (
    <div className="rounded-sm  cursor-pointer border-[1.5px] w-full  my-2 px-5 py-5 border-gray-800">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <p className="text-white hover:text-[#FF6A00] text-md">{Title}</p>
        <p className="text-gray-500 hover:text-[#FF6A00] text-[12px] whitespace-nowrap">
          {Date}
        </p>
      </div>

      <p className="text-sm mt-2 text-gray-400">{Desc.slice(0, 200) + " "}</p>
    </div>
  );
}
