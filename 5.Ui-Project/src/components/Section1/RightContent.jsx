import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div id = 'right' className="h-full overflow-x-auto rounded-4xl flex flex-nowrap gap-10 p-6 w-[70%]">
      {props.users.map((ele, idx) => {
        return <RightCard key={idx} id={idx} user={ele}></RightCard>;
      })}
    </div>
  );
};

export default RightContent;
