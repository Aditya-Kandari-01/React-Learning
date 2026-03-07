import React from 'react'

const App = () => {
  const user = {
    name : 'aditya',
    age : 21,
    work : 'learning'
  }
  localStorage.setItem('user',JSON.stringify(user))
  const retrieve = JSON.parse(localStorage.getItem('user'));
  console.log(retrieve);
  return (
    <div className='text-white'>App</div>
  )
}

export default App



// const App = () => {
//   const user = {
//     name : 'aditya',
//     age : 21,
//     work : 'learning'
//   }
//   localStorage.setItem('user',user);
  
//   return (
//     <div className='text-white'>App</div>
//   )
// }


// const App = () => {
//   const user = {
//     name : 'aditya',
//     age : 21,
//     work : 'learning'
//   }
//   localStorage.setItem('user',JSON.stringify(user))
//   const retrieve = JSON.parse(localStorage.getItem('user'));
//   console.log(retrieve);
//   return (
//     <div className='text-white'>App</div>
//   )
// }