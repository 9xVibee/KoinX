import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex bg-white py-4 px-2 sm:px-8 md:px-10 justify-between items-center shadow-md relative">
      {/* left */}
      <div className="text-2xl font-semibold">KoinX</div>
      {/* right */}
      <div className="flex font-semibold gap-8 items-center max-md:hidden">
        <p className="cursor-pointer">Crypto Taxes</p>
        <p className="cursor-pointer">Free Tools</p>
        <p className="cursor-pointer">Resources Center</p>
        <button className="px-5 py-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md text-white hover:opacity-80 transition">
          Get Started
        </button>
      </div>
      <Menu
        className="max-md:block hidden py-2 size-11 absolute right-2 top-2"
        onClick={() => setIsOpen(true)}
      />
      <div
        className={`max-md:flex justify-center flex-col items-center hidden absolute top-0 w-full bg-white h-screen gap-8 transition ${
          !isOpen ? "translate-x-[100%]" : "right-2"
        }`}
      >
        <X
          className="absolute top-3 right-2 size-7"
          onClick={() => setIsOpen(false)}
        />
        <p className="cursor-pointer">Crypto Taxes</p>
        <p className="cursor-pointer">Free Tools</p>
        <p className="cursor-pointer">Resources Center</p>
        <button className="px-5 py-1.5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md text-white hover:opacity-80 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
