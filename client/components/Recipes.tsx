import React, { FC, useContext, useEffect } from "react";
import { StoreContext } from "../store/StoreProvider";
import { ScreenName } from "../types";
interface IRecipesProps {}

const Recipes: FC<IRecipesProps> = () => {
  const hmi = useContext(StoreContext);

  useEffect(() => {
    hmi?.handleScreenName(ScreenName.Recipes);
  });

  return (
    <div className="flex gap-4 p-4 bg-gray-200 grow">
      <section className="w-full p-4 mr-16 bg-white shadow-lg rounded-2xl">
        <h1 className="text-3xl font-bold text-gray-800 font-barlow">
          Receptury
        </h1>
      </section>
    </div>
  );
};

export default Recipes;
