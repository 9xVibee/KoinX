import { cryptoCurrencyContext } from "@/context/cryptoCurrencyContext";
import { useContext } from "react";
import AboutBitcoinCard from "./AboutBitcoinCard";
import imgUrl1 from "./../asset/nick-chong-N__BnvQ_w18-unsplash.jpg";
import imgUrl2 from "./../asset/kanchanara-GnWfl_nnZro-unsplash.jpg";

const cardData = [
  {
    title: "Calculate your Profits",
    imgUrl: imgUrl1,
    bgColor: "from-green-500 to-blue-500",
  },
  {
    title: "Calculate your tax liability",
    imgUrl: imgUrl2,
    bgColor: "from-orange-400 to-orange-600",
  },
];

const AboutBitcoin = () => {
  const { cryptoCurrency } = useContext(cryptoCurrencyContext);

  return (
    <div className="w-full p-2 md:p-6 bg-white rounded-md flex flex-col gap-5">
      <h1 className="text-2xl font-bold">About {cryptoCurrency}</h1>
      <div className="flex flex-col border-b-2 pb-4">
        <h1 className="font-bold text-xl">What is {cryptoCurrency}</h1>
        <p className="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex sint
          magnam saepe praesentium dolores excepturi maxime mollitia porro
          officiis eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Vitae tempore sapiente, reiciendis, iste corporis asperiores numquam
          soluta, at quod dolores mollitia aperiam molestias cum placeat quae.
          Nemo nam recusandae qui.
        </p>
      </div>
      <div className="flex flex-col border-b-2 pb-4 gap-4">
        <>
          <h1 className="font-bold text-xl">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex sint
            magnam saepe praesentium dolores excepturi maxime mollitia porro
            officiis eum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Vitae tempore sapiente, reiciendis, iste corporis asperiores
            numquam soluta, at quod dolores mollitia aperiam molestias cum
            placeat quae. Nemo nam recusandae qui. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nihil, commodi. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Rerum, assumenda?
          </p>
        </>
        <p className="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex sint
          magnam saepe praesentium dolores excepturi maxime mollitia porro
          officiis eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Vitae tempore sapiente, reiciendis, iste corporis asperiores numquam
          soluta, at quod dolores mollitia aperiam molestias cum placeat quae.
          Nemo nam recusandae qui.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nihil, commodi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Rerum, assumenda?
        </p>
        <p className="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex sint
          magnam saepe praesentium dolores excepturi maxime mollitia porro
          officiis eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Vitae tempore sapiente, reiciendis, iste corporis asperiores numquam
          soluta, at quod dolores mollitia aperiam molestias cum placeat quae.
          Nemo nam recusandae qui.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nihil, commodi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Rerum, assumenda?
        </p>
      </div>
      <div className="flex flex-col border-b-2 pb-4 gap-4">
        <h1 className="font-bold text-xl">Already holding {cryptoCurrency}?</h1>
        <div className="w-full flex max-md:flex-col gap-4 md:gap-12">
          {cardData.map((item) => {
            return (
              <AboutBitcoinCard
                key={item.title}
                title={item.title}
                imgUrl={item.imgUrl}
                bgColor={item.bgColor}
              />
            );
          })}
        </div>
      </div>
      <p className="text-base">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex sint magnam
        saepe praesentium dolores excepturi maxime mollitia porro officiis eum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tempore
        sapiente, reiciendis, iste corporis asperiores numquam soluta, at quod
        dolores mollitia aperiam molestias cum placeat quae. Nemo nam recusandae
        qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
        commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
        assumenda?
      </p>
    </div>
  );
};

export default AboutBitcoin;
