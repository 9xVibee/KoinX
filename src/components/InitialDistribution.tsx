import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Orange", "Blue"],
  datasets: [
    {
      label: "My First Dataset",
      data: [80, 20],
      backgroundColor: ["blue", "orange"],
      hoverOffset: 4,
    },
  ],
};

const InitialDistribution = () => {
  return (
    <div className="bg-white max-md:hidden w-full border-2 rounded-lg  p-4">
      <h1 className="text-2xl font-bold">Tokenomics</h1>
      <h2 className="text-xl">Initial Distribution</h2>
      <div className="w-1/2 gap-24 py-4 items-center flex">
        <div className="h-56 w-56">
          <Doughnut data={data} />
        </div>
        <div>
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 rounded-full bg-blue-700"></div>
            <p>Crowdsale investors: 80%</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-4 h-4 rounded-full bg-yellow-600"></div>
            <p>Foundation: 20%</p>
          </div>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        atque in excepturi vel est labore ipsum, adipisci aut et fugit. Nisi hic
        id dolor nemo incidunt similique, omnis voluptatum cum. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Sit similique recusandae
        officiis officia autem neque consectetur, dolorem nihil excepturi minima
        explicabo, eligendi aliquid laborum in illum natus nesciunt. Nobis,
        dolores?
      </p>
    </div>
  );
};

export default InitialDistribution;
