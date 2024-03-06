import { useState } from "react";

const navItems = [
  "OverView",
  "Fundamentals",
  "News Insights",
  "Sentiments",
  "Team",
  "Technicals",
  "Tokenomics",
];

const MiniNav = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="w-full h-10 border-2 border-b-gray-300 flex gap-8">
      {navItems.map((item, idx) => {
        return (
          <p
            className={`cursor-pointer font-semibold ${
              selectedItem === idx
                ? "text-blue-700 border-2 border-b-blue-700 h-full w-fit"
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
