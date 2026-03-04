import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
function App() {
  const users = [
    { img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", intro: "", tag: "Satisfied" },
        { img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", intro: "", tag: "Thinking" },
    { img: "https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?q=80&w=746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", intro: "", tag: "Average" },
    { img: "https://plus.unsplash.com/premium_photo-1681823043769-a7c20809a756?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", intro: "", tag: "Working" }
  ];
  return (
    <>
      <div>
        <Section1 users={users}></Section1>
        <Section2></Section2>
      </div>
    </>
  );
}

export default App;
