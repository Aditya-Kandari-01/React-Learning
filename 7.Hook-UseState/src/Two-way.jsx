import React, { useState } from "react";

// Two-way Binding
const App = () => {
  const [title, setTitle] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    console.log('Form Submitted by : ',title);
    setTitle('');
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={title}
          type="text"
          className="border m-2.5 p-2.5"
          placeholder="Enter your name"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button className="border p-2.5 bg-gray-400">Submit</button>
      </form>
    </div>
  );
};

export default App;

// import React from 'react'

// const App = () => {
//   const submitHandler = (event) => {
//     event.preventDefault();
//     console.log(event);
//   }
//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input type="text" className='border m-2.5 p-2.5' placeholder='Enter your name'/>
//         <button className='border p-2.5 bg-gray-400'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App
