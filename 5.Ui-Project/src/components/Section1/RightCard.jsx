import RightCardContent from "./RightCardContent"
const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-[33%] rounded-3xl bg-red-500">
      <img
        className="h-full object-cover w-full"
        src={props.user.img}
        alt=""
      />
      <RightCardContent id={props.id} user={props.user}></RightCardContent>
    </div>
  );
};

export default RightCard;
