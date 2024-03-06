import { RiErrorWarningLine } from "react-icons/ri";
import HighLowComp from "./HighLowComp";
import Fundamentals from "./Fundamentals";

const Performance = () => {
  return (
    <div className="w-full flex flex-col h-fit p-6 gap-6 bg-white rounded-md">
      <h1 className="text-2xl font-semibold">Performance</h1>
      <HighLowComp
        lowTitle="Today's Low"
        lowPrice="46,930.22"
        highPrice="49,343.83"
        highTitle="Today's High"
        showArrow={true}
      />
      <HighLowComp
        lowTitle="Today's Low"
        lowPrice="46,930.22"
        highPrice="49,343.83"
        highTitle="Today's High"
        showArrow={false}
      />
      <h1 className="flex -mb-2 mt-2 text-xl font-semibold text-gray-700 items-center gap-1">
        Fundamentals <RiErrorWarningLine className="mt-1" />
      </h1>
      <Fundamentals />
    </div>
  );
};

export default Performance;
