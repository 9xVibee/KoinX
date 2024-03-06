import Chart from "./Chart";
import MiniNav from "./MiniNav";

const LeftSection = () => {
  return (
    <div className="md:w-[75%] rounded-md flex flex-col gap-4 pb-10">
      <Chart />
      <MiniNav />
    </div>
  );
};

export default LeftSection;
