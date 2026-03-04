import HeroText from "./HeroText"
import Arrow from "./Arrow"
const LeftContent = () => {
  return (
    <div className="h-full flex flex-col justify-between w-[30%] ">
      <HeroText></HeroText>
      <Arrow></Arrow>
    </div>
  );
};

export default LeftContent;
