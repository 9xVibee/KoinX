import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full flex bg-white overflow-hidden py-4 px-2 sm:px-8 md:px-10 justify-between items-center shadow-md">
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
      <Menu className="max-md:block hidden py-2 size-11" />
    </div>
  );
};

export default Navbar;
