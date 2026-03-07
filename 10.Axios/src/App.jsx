import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([])
  const getData = async() =>{
    const res = await axios.get("https://picsum.photos/v2/list");
    setData(res.data);
  }

  return (
    <div>
      <button className="m-2 p-2 rounded bg-white" onClick={getData}>
        Get Data
      </button>
      <div>
        {data.map((ele,idx)=>{
          return <h3 className="text-white" key={idx}>Hello {ele.author}</h3>
        })}
      </div>
    </div>
  );
};

export default App;
