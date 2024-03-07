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
    sparkline: string;
  };
};

const useTrendingCoins = () => {
  const [loading, setLoading] = useState(true);
  const [trendingCoins, setTrendingCoins] = useState<TrendingCoins[]>([]);

  const getTopThreeTrendingCoins = async (numberOfDataWants: string) => {
    setLoading(true);

    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
      );

      const data = await res.json();

      if (numberOfDataWants == "three") {
        const topThreeCoins = data.coins.slice(0, 3)?.map((item: any) => {
          return { ...item?.item };
        });

        setTrendingCoins(topThreeCoins);
      } else {
        setTrendingCoins(data.coins?.map((item: any) => item?.item));
      }
      setLoading(false);
    } catch (error) {
      console.log("Error");
    }
  };

  return { loading, trendingCoins, getTopThreeTrendingCoins };
};

export default useTrendingCoins;
