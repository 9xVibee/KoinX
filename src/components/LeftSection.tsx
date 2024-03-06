import Chart from "./Chart";
import MiniNav from "./MiniNav";
import Performance from "./Performance";
import Sentiment from "./Sentiment";

const LeftSection = () => {
  return (
    <div className="md:w-[75%] rounded-md flex flex-col gap-6 pb-10">
      <Chart />
      <MiniNav />
      <Performance />
      <Sentiment />
    </div>
  );
};

export default LeftSection;
