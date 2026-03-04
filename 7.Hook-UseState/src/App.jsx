import React, { useState } from "react";

const App = () => {
  const [num,setNum] = useState({
    user:'aditya',
    age:'21'
  });
  const change = () =>{
    setNum(x => (
      {...x,age:22}
    ))
  }
  return (
    <div>
      <h1>User name is {num.user} and age is {num.age}</h1>
      <button onClick={change}>Click</button>
    </div>
  );
};

export default App;

// const App = () => {
//   const [a, setA] = useState(20);
//   const [user,setUsername] = useState('Sarthak')

//   function changeNum(){
//     setA(30);
//     setUsername('Aditya')
//   }
//   return (
//     <div>
//       <h1>Value of a is {a}</h1>
//       <h1>Set User name {user}</h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   )
// }

// Basic inc and dec for pratice
// const App = () => {
//   const [a,setA] = useState(0);
//   function increase(){
//    setA(a+1);
//   }
//   function decrease(){
//     setA(a-1);
//   }
//   return (
//     <div>
//       <h1 className="bg-gray-600 ml-25 mt-5 w-fit rounded pl-10 pr-10 pt-5 pb-5 text-white  text-8xl"> {a} </h1>
//       <div className="w-3xs h-10 mt-10 ml-10 flex items-center justify-between">
//         <button onClick={increase} className="p-3 bg-gray-600 text-white rounded-2xl">Increment</button>
//         <button onClick={decrease} className="p-3 bg-gray-600 text-white rounded-2xl">Decrement</button>
//       </div>
//     </div>
//   );
// };
