import { MoveRight } from "lucide-react";
import market from "./../asset/market.png";
import TrendingCoins from "./TrendingCoins";

const RightSection = () => {
  return (
    <div className="md:w-[25%] rounded-md flex flex-col gap-4">
      <div className=" bg-blue-700 w-full py-4 md:py-6 pb-6 md:pb-10 rounded-2xl flex flex-col items-center px-2 sm:px-4 md:px-10 text-white gap-4">
        <h1 className="text-xl text-center font-semibold">
          Get Started with KoinX <br /> for FREE
        </h1>
        <p className="text-xs text-center text-[#f0f0f0]">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <img src={market} alt="market" className="w-44" loading="lazy" />
        <button className="flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-md font-semibold">
          Get Started for FREE <MoveRight className="size-4" />
        </button>
      </div>
      <TrendingCoins />
    </div>
  );
};

export default RightSection;
