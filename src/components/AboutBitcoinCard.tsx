import { MoveRight } from "lucide-react";

interface AboutBitcoindCardProps {
  imgUrl: string;
  title: string;
  bgColor: string;
}

const AboutBitcoinCard = ({
  imgUrl,
  title,
  bgColor,
}: AboutBitcoindCardProps) => {
  return (
    <div
      className={
        "w-[40%] p-3 flex rounded-md bg-gradient-to-br  text-white items-center gap-4 " +
        bgColor
      }
    >
      <div className="w-28 h-28 rounded-md overflow-hidden">
        <img
          src={imgUrl}
          alt=""
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col gap-4 items-start">
        <h1 className="text-2xl w-[90%] font-semibold">{title}</h1>
        <button className="flex items-center gap-2 hover:opacity-70 transition font-semibold py-2 px-3 rounded-md bg-white text-black">
          Check Now <MoveRight className="mt-0.5" />
        </button>
      </div>
    </div>
  );
};

export default AboutBitcoinCard;
