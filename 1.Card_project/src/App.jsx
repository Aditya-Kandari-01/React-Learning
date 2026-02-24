import Card from "./components/Card";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    <div className="parent">
      <Card user='Aditya' age={21} img = "https://images.unsplash.com/photo-1769228092677-9f2d7d7c19f3?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Card>
      <Card user='Miner' age={54} img = "https://images.unsplash.com/photo-1770701195265-8af0dc148446?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Card>
    </div>
    </>
  );
}

export default App;
