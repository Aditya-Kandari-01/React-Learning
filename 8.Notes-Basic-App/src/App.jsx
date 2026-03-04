import { useState } from "react";
const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const deleteNote = (index) => {
    const copyTask = [...task];
    copyTask.splice(index,1);
    setTask(copyTask);
  };
  
  const submitHandler = (event) => {
    event.preventDefault();
    setTask(prev => [...prev,{ title, details }]);
    setTitle("");
    setDetails("");
  };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   const copyTask = [...task];
  //   copyTask.push({ title, details });
  //   setTask(copyTask);
  //   setTitle("");
  //   setDetails("");
  // };
  return (
    <div className="h-screen lg:flex w-full bg-black text-white">
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-96 lg:w-1/2 items-start p-10"
      >
        <div className="flex flex-col items-start">
          <input
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={title}
            className="p-5 w-50 border-2"
            type="text"
            placeholder="Enter Notes Heading"
          />
          <textarea
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            className="p-5 w-96 h-96 border-2 mt-5"
            placeholder="write the note..."
            name=""
            id=""
          ></textarea>
          <button className="active:scale-95 bg-white w-96 font-bold text-black mt-10 px-5 rounded-2xl py-2 ">
            +Add Note
          </button>
        </div>
      </form>
      <div className="lg:border"></div>
      <div className=" flex-wrap p-10 lg:w-1/2 h-full">
        <h1 className="text-xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap gap-5 items-start mt-5 overflow-auto h-full">
          {task.map((ele, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col items-start justify-between h-52 w-40 rounded-2xl bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] p-2.5"
              >
                <div>
                  <h3 className="wrap-break-word text-black text-2xl font-bold">
                    {ele.title}
                  </h3>
                  <p className="mt-3 wrap-break-word leading-tight text-gray-700">
                    {ele.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full active:scale-95 rounded bg-red-500 py-1 text-sm text-white"
                >
                  Delete Note
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
