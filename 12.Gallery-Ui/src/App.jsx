import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
const App = () => {
  const [userData, setUserData] = useState([]);
  const [idx, setIdx] = useState(1);

  const getData = async () => {
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${idx}&limit=15`,
    );
    setUserData(res.data);
  };

  useEffect(() => {
    getData();
  }, [idx]);

  let printUserData = (
    <h3 className="text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading...
    </h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map(function (element, idx) {
      return (
        <div key={idx} className="">
          <Card ele={element}></Card>
        </div>
      );
    });
  }
  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      <div className="flex h-212.5 flex-wrap gap-4 p-2">{printUserData}</div>
      <div className="flex justify-center gap-6 p-4 items-center ">
        <button
        disabled={idx === 1}
        style={{opacity: idx==1 ? 0.6 : 1}}
          onClick={() => {
            if (idx > 1) {
              setIdx(idx - 1);
              setUserData([]);
            }
          }}
          className={`bg-amber-300 text-black rounded py-2 px-4 font-semibold text-sm ${idx === 1 ? "":"cursor-pointer active:scale-95" }`}
        >
          Prev
        </button>
        <h4>Page {idx}</h4>
        <button
          onClick={() => {
            setIdx(idx + 1);
            setUserData([]);
          }}
          className="bg-amber-300 text-black rounded py-2 px-4 font-semibold text-sm cursor-pointer active:scale-95"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
