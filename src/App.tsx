import LeftSection from "./components/LeftSection";
import Navbar from "./components/Navbar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import RightSection from "./components/RightSection";

const App = () => {
  return (
    <div className="w-full bg-gray-200">
      <Navbar />
      <div className="flex flex-col px-3 md:px-8">
        <p className="flex items-center text-[0.9rem] text-gray-600 py-4 gap-1">
          Cryptocurrencies{" "}
          <MdKeyboardDoubleArrowRight className="size-5 mt-0.5" />
          <span className="font-semibold text-black">{"Bitcoin"}</span>
        </p>
        <div className="flex md:flex-row flex-col w-full gap-4">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </div>
  );
};

export default App;
