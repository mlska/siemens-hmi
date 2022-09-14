import React, { FC } from "react";

interface IStatsProps {}

const Statistics: FC<IStatsProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 my-16 grow">
      Stats Component
    </div>
  );
};

export default Statistics;
