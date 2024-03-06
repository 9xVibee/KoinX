import { useContext } from "react";
import { cryptoCurrencyContext } from "../context/cryptoCurrencyContext";

const Fundamentals = () => {
  const { cryptoCurrency } = useContext(cryptoCurrencyContext);

  return (
    <div className="flex md:flex-row font-semibold text-gray-500 w-full flex-col md:gap-16">
      <div className="md:w-[50%] w-full flex flex-col">
        <div className="flex w-full text-[0.9rem] justify-between py-4 border-b-2 items-center">
          <p className="capitalize">{cryptoCurrency} Price</p>
          <p className="text-black">$16,815.46</p>
        </div>
        <div className="flex w-full text-[0.9rem] py-4 justify-between items-center border-b-2">
          <p className="capitalize">24 Low / 24 High</p>
          <p className="text-black">$16,382.07 / $16,874.12</p>
        </div>
        <div className="flex w-full text-[0.9rem] py-4 justify-between items-center border-b-2">
          <p className="capitalize">7d Low / 7d High</p>
          <p className="text-black">$16,382.07 / $16,874.12</p>
        </div>
        <div className="flex w-full text-[0.9rem] py-4 justify-between items-center border-b-2">
          <p className="capitalize">Trading Volume</p>
          <p className="text-black">$23,249,202,782</p>
        </div>
        <div className="flex w-full text-[0.9rem] py-4 justify-between items-center border-b-2">
          <p className="capitalize">Market Cap Rank</p>
          <p className="text-black">#1</p>
        </div>
      </div>
      <div className="md:w-[50%] w-full">
        <div className="flex w-full text-[0.9rem] py-4 justify-between items-center border-b-2">
          <p className="capitalize">Market Cap</p>
          <p className="text-black">$323,507,290,047</p>
        </div>
        <div className="flex w-full text-[0.9rem] py-4 justify-between items-center border-b-2">
          <p className="capitalize">Market Cap Dominance</p>
          <p className="text-black">38.343%</p>
        </div>
        <div className="flex w-full text-[0.9rem] py-4 justify-between items-center border-b-2">
          <p className="capitalize">Volume / Market Cap</p>
          <p className="text-black">0.0718</p>
        </div>
        <div className="flex w-full text-[0.9rem] py-4 justify-between items-center border-b-2">
          <p className="capitalize">All-Tiem High</p>
          <div className="flex flex-col text-center">
            <p className="text-black">
              $69,044.77 <span className="text-red-600">-75.6%</span>
            </p>
            <p className="text-black">Nov 10, 2021 (about 1 year)</p>
          </div>
        </div>
        <div className="flex w-full text-[0.9rem] py-4 justify-between items-center border-b-2">
          <p className="capitalize">All-Tiem Low</p>
          <div className="flex flex-col text-center">
            <p className="text-black">
              $67.81 <span className="text-green-500">24729.1%</span>
            </p>
            <p className="text-black">Jul 06, 2013 (over 9 years)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fundamentals;
