/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

type TrendingCoins = {
  id: string;
  name: string;
  symbol: string;
  small: string;
  large: string;
  data: {
    price: string;
  };
};

const useTrendingCoins = () => {
  const [loading, setLoading] = useState(true);
  const [trendingCoins, setTrendingCoins] = useState<TrendingCoins[]>([]);

  const getTopThreeTrendingCoins = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
      );

      const data = await res.json();
      const topThreeCoins = data.coins.slice(0, 3)?.map((item: any) => {
        return { ...item?.item };
      });

      setLoading(false);
      setTrendingCoins(topThreeCoins);
    } catch (error) {
      console.log("Error");
    }
  };

  return { loading, trendingCoins, getTopThreeTrendingCoins };
};

export default useTrendingCoins;
