import { Chart, ArcElement } from "chart.js";
import InitialDistribution from "./InitialDistribution";
import Team from "./Team";
Chart.register(ArcElement);

function Tokenomics() {
  return (
    <>
      <main className="w-full bg-gray-200 flex flex-col gap-4">
        <InitialDistribution />
        <Team />
      </main>
    </>
  );
}

export default Tokenomics;
