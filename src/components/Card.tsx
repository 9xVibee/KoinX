import { LucideIcon } from "lucide-react";

interface CardProps {
  Icon: LucideIcon;
  bg: string;
}

const Card = ({ Icon, bg }: CardProps) => {
  return (
    <div className="flex h-48 p-4 rounded-md bg-gray-200 gap-2">
      <div
        className={`w-11 h-11 rounded-full ${
          bg == "red"
            ? "bg-red-600"
            : bg == "orange"
            ? "bg-orange-600"
            : "bg-pink-600"
        } flex justify-center items-center text-white`}
      >
        <Icon />
      </div>
      <div className="w-[90%] text-xs flex flex-col gap-2">
        <p className=" font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquid
          at itaque, eius alias obcaecati ipsam dolorem placeat
        </p>
        <p className="max-sm:line-clamp-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          maiores, dicta recusandae at nesciunt eaque laborum vitae molestiae
          possimus, dolorum consequatur mollitia totam facilis. Ea sunt
          explicabo alias minima perferendis earum ipsam voluptatem laboriosam
          officia ratione, error illo dignissimos, repudiandae soluta omnis,
          dicta veniam iure animi. Deserunt porro accusamus provident?
        </p>
      </div>
    </div>
  );
};

export default Card;
