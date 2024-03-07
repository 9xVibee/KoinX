interface YouMayAlsoLikeCardProps {
  price: string;
  symbol: string;
  sparkline: string;
  url: string;
}

const YouMayAlsoLikeCard = ({
  price,
  sparkline,
  symbol,
  url,
}: YouMayAlsoLikeCardProps) => {
  return (
    <div className="flex flex-col p-3 gap-1 border rounded-md">
      <div className="flex items-center gap-2">
        <img src={url} alt="" className="w-4 h-4" />
        <p className="text-base font-semibold">({symbol})</p>
      </div>
      <h1 className="font-semibold">{price}</h1>
      <div className="w-28 h-16 ml-5">
        <img src={sparkline} alt="" className="w-full h-full"/>
      </div>
    </div>
  );
};

export default YouMayAlsoLikeCard;
