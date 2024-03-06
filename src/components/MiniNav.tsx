import { useState } from "react";

const navItems = [
  "OverView",
  "Fundamentals",
  "Insights",
  "Sentiments",
  "Team",
  "Technicals",
  "Tokenomics",
];

const MiniNav = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="w-full overflow-x-scroll h-10 border-2 border-b-gray-300 flex gap-8 hide transition">
      {navItems.map((item, idx) => {
        return (
          <p
            className={`cursor-pointer font-semibold ${
              selectedItem === idx
                ? "text-blue-700 border-2 border-b-blue-700 h-full"
                : "border-2 border-b-transparent"
            }`}
            key={idx}
            onClick={() => {
              setSelectedItem(idx);
            }}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default MiniNav;
