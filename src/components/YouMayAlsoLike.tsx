import useTrendingCoins from "@/hooks/useTrendingCoins";
import YouMayAlsoLikeCard from "./YouMayAlsoLikeCard";
import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const YouMayAlsoLike = ({ title }: { title: string }) => {
  const { getTopThreeTrendingCoins, loading, trendingCoins } =
    useTrendingCoins();

  useEffect(() => {
    getTopThreeTrendingCoins("all");
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="w-full p-6 bg-white rounded-md flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex gap-4">
        <Carousel className="w-[85%] md:w-[90%] ml-6 sm:ml-8 md:ml-10">
          <CarouselContent>
            {trendingCoins.map((item) => {
              return (
                <CarouselItem className="md:basis-1/5">
                  <YouMayAlsoLikeCard
                    price={item.data.price}
                    sparkline={item.data.sparkline}
                    symbol={item.symbol}
                    url={item.small}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
