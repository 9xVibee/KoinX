import { ChevronUp } from "lucide-react";

interface HighLowProps {
  lowTitle: string;
  lowPrice: string;
  showArrow: boolean;
  highTitle: string;
  highPrice: string;
}

const HighLowComp = ({
  highPrice,
  highTitle,
  lowPrice,
  lowTitle,
  showArrow,
}: HighLowProps) => {
  return (
    <div className="flex w-full items-center gap-4 text-gray-500">
      <div className="flex flex-col items-start">
        <p className="text-xs">{lowTitle}</p>
        <p className="font-semibold text-[0.9rem]">{lowPrice}</p>
      </div>
      <div className="flex-1 relative">
        <div className="w-full h-1 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
        {showArrow && (
          <div className="absolute flex items-center flex-col right-32">
            <ChevronUp className="size-4 text-black" strokeWidth={3} />
            <p className="text-xs font-semibold text-gray-600">$48,637.83</p>
          </div>
        )}
      </div>
      <div className="flex flex-col items-end">
        <p className="text-xs">{highTitle}</p>
        <p className="font-semibold text-[0.9rem]">{highPrice}</p>
      </div>
      
    </div>
  );
};

export default HighLowComp;
