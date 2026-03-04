import React from "react";
import { MoveRightIcon } from "lucide-react";
const RightCardContent = (props) => {
  console.log(props)
  return (
    <div className="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between">
      <h2 className="bg-white font-semibold text-2xl flex rounded-full h-10 w-10 justify-center items-center">
        {props.id+1}
      </h2>
      <div>
        <p className="text-lg text-white mb-14 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At maiores
          impedit sed tenetur, quod nam?
        </p>
        <div className="flex items-center">
          <button className="relative bg-blue-500 font-semibold text-white px-8 py-2 rounded-4xl">
            {props.user.tag}
          </button>
          <button className="absolute left-32 bg-blue-500 font-semibold rounded-full px-8 py-2">
          </button>
          <button className="absolute left-40 bg-blue-500 font-semibold text-white px-2 py-2 rounded-full">
            <MoveRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
