import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
const Page1Conent = (props) => {
  return (
    <div className="flex py-3 h-[90vh] items-center gap-10 px-18">
      <LeftContent></LeftContent>
      <RightContent users={props.users}></RightContent>
    </div>
  );
};

export default Page1Conent;
