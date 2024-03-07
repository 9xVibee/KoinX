import AboutBitcoin from "./AboutBitcoin";
import Chart from "./Chart";
import MiniNav from "./MiniNav";
import Performance from "./Performance";
import Sentiment from "./Sentiment";
import YouMayAlsoLike from "./YouMayAlsoLike";

const LeftSection = () => {
  return (
    <div className="md:w-[75%] rounded-md flex flex-col gap-6 pb-10">
      <Chart />
      <MiniNav />
      <Performance />
      <Sentiment />
      <AboutBitcoin />
      <YouMayAlsoLike />
    </div>
  );
};

export default LeftSection;
