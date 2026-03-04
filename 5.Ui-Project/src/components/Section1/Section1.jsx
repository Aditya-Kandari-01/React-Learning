import NavBar from "./NavBar";
import Page1Conent from "./Page1Content";
const Section1 = (props) => {
  return (
    <div className="h-screen w-full">
      <NavBar></NavBar>
      <Page1Conent users={props.users}></Page1Conent>
    </div>
  );
};

export default Section1;
