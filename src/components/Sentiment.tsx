import { RiErrorWarningLine } from "react-icons/ri";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "./Card";

import { BarChartBig, Newspaper, TrendingUp } from "lucide-react";
import BarInSentiment from "./BarInSentiment";

const iconsArr = [
  { icon: BarChartBig, bg: "red" },
  { icon: Newspaper, bg: "pink" },
  { icon: TrendingUp, bg: "orange" },
];

const Sentiment = () => {
  return (
    <div className="flex flex-col gap-3 w-full p-2 md:p-6 bg-white rounded-md">
      <h1 className="text-2xl font-semibold">Sentiment</h1>
      <h1 className="flex  text-base font-bold text-gray-700 items-center gap-1">
        Key Events <RiErrorWarningLine className="mt-1" />
      </h1>
      <div className="w-full flex items-center -mt-8">
        <Carousel className="w-[85%] md:w-[90%] ml-1 sm:ml-8 md:ml-10 mt-10">
          <CarouselContent>
            {iconsArr.map((item, idx) => {
              return (
                <CarouselItem className="md:basis-1/2">
                  <Card Icon={item.icon} key={idx} bg={item.bg} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <h1 className="flex  text-base font-bold mt-2 text-gray-700 items-center gap-1">
        Analyst Estimates <RiErrorWarningLine className="mt-1" />
      </h1>
      <div className="w-full flex items-center gap-4 md:gap-12">
        <div className="w-28 h-28 bg-green-200 flex justify-center items-center rounded-full">
          <p className="text-green-700 font-semibold text-3xl">76%</p>
        </div>
        <div className="w-[70%] sm:w-[80%] flex flex-col gap-2">
          <BarInSentiment color="green" percentage={76} title="Buy" />
          <BarInSentiment color="gray" percentage={8} title="Hold" />
          <BarInSentiment color="red" percentage={16} title="Sell" />
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
