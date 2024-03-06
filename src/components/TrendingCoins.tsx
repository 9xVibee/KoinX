import { useEffect } from "react";
import useTrendingCoins from "../hooks/useTrendingCoins";

const TrendingCoins = () => {
  const { getTopThreeTrendingCoins, trendingCoins, loading } =
    useTrendingCoins();

  useEffect(() => {
    getTopThreeTrendingCoins();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="w-full p-4 bg-white rounded-md flex flex-col gap-4">
      <h1 className="text-xl font-bold">Trending Coins (24h)</h1>
      <div className="w-full flex flex-col gap-2">
        {trendingCoins.map((item) => {
          return (
            <div className="flex justify-between">
              <div className="flex gap-2 items-center text-[0.8rem] font-semibold">
                <img src={item.small} alt="" className="w-4 h-4" />
                <p>
                  {item.name} ({item.symbol})
                </p>
              </div>
              <div className="text-[0.8rem] font-semibold bg-green-200 px-1 rounded-md text-green-600">
                {item?.data?.price}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingCoins;
