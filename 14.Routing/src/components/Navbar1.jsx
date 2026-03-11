import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar1 = () => {
  let navigate = useNavigate();
  return (
    <div className="bg-cyan-800 px-5 py-3">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-amber-500 rounded px-5 py-2 cursor-pointer m-2 active:scale:95"
      >
        Return To Home Page
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-amber-500 rounded px-5 py-2 cursor-pointer m-2 active:scale:95"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(1);
        }}
        className="bg-amber-500 rounded px-5 py-2 cursor-pointer m-2 active:scale:95"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar1;
