interface BarInSentimentProps {
  title: string;
  percentage: number;
  color: string;
}

const BarInSentiment = ({ title, percentage, color }: BarInSentimentProps) => {
  return (
    <div className="w-full flex items-center gap-2">
      <p className="text-[0.9rem] font-semibold text-muted-foreground">
        {title}
      </p>
      <div className="w-[80%] flex items-center">
        <div
          style={{
            width: percentage + "%",
          }}
          className={`h-1.5 rounded-md ${
            color == "red"
              ? "bg-red-600"
              : color == "gray"
              ? "bg-gray-600"
              : "bg-green-600"
          }`}
        ></div>
        <p className="text-[0.9rem] font-semibold text-muted-foreground ml-2">{percentage}%</p>
      </div>
    </div>
  );
};

export default BarInSentiment;
