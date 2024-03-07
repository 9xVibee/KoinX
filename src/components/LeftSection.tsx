import AboutBitcoin from "./AboutBitcoin";
import Chart from "./Chart";
import MiniNav from "./MiniNav";
import Performance from "./Performance";
import Sentiment from "./Sentiment";
import Tokenomics from "./Tokenomics";
import YouMayAlsoLike from "./YouMayAlsoLike";

const LeftSection = () => {
  return (
    <div className="md:w-[75%] rounded-md flex flex-col gap-6 pb-10">
      <div className="h-[80vh] bg-white">
        <Chart />
      </div>
      <MiniNav />
      <Performance />
      <Sentiment />
      <AboutBitcoin />
      <Tokenomics />
      <YouMayAlsoLike />
    </div>
  );
};

export default LeftSection;
