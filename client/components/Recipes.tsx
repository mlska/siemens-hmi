import React, { FC, useContext, useEffect, useState } from "react";
import { StoreContext } from "../store/StoreProvider";
import { ScreenName, IRecipe } from "../types";

import { BsPencil, BsTrash } from "react-icons/bs";
import { AiOutlineFileAdd } from "react-icons/Ai";

interface IRecipesProps {}

const Recipes: FC<IRecipesProps> = () => {
  const hmi = useContext(StoreContext);

  const [selected, setSelected] = useState<number>(0);

  const handleSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(Number(event.target.value));
  };

  useEffect(() => {
    hmi?.handleScreenName(ScreenName.Recipes);
  });

  const optionsList = hmi?.recipes
    .sort((a, b) => a.id - b.id)
    .map((recipe, index) => {
      return (
        <option
          value={index}
          key={recipe.id}
        >{`${recipe.id} - ${recipe.name}`}</option>
      );
    });

  const SelectedRecipe = () => {
    if (hmi?.recipes[selected]) {
      const object = hmi?.recipes[selected];
      const params = Object.keys(object).map((key) => {
        return (
          <li
            className="flex justify-between px-8 py-4 uppercase border-2 border-gray-300 rounded-lg shadow-lg "
            key={key}
          >
            <div>{key}</div>
            <div>{hmi?.recipes[selected][key as keyof IRecipe]}</div>
          </li>
        );
      });
      return <ul className="flex flex-col gap-4 pt-4 mt-8">{params}</ul>;
    } else {
      return <ul>Parametry niedostępne</ul>;
    }
  };

  return (
    <div className="flex p-4 bg-gray-200 grow">
      <section className="flex flex-col w-full p-4 mr-4 bg-white shadow-lg rounded-2xl">
        <div className="flex justify-between">
          <h1 className="pb-4 mb-2 text-2xl font-bold text-gray-800 font-barlow">
            Lista receptur
          </h1>
          <div className="text-2xl">
            <button className="p-2 mr-4 text-blue-600 bg-gray-200 rounded-lg">
              <AiOutlineFileAdd />
            </button>
            <button className="p-2 mr-4 bg-gray-200 rounded-lg">
              <BsTrash />
            </button>
            <button className="p-2 bg-gray-200 rounded-lg">
              <BsPencil />
            </button>
          </div>
        </div>
        <div className="relative inline-block w-full">
          <select
            value={selected}
            onChange={handleSelected}
            className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline"
          >
            {optionsList}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <div>
          <h2 className="pt-4 mt-8 text-2xl font-bold text-gray-800 border-t-2 font-barlow">
            Parametry
          </h2>
          <SelectedRecipe />
        </div>
      </section>
      <section className="flex flex-col w-full p-4 mr-16 bg-white shadow-lg rounded-2xl">
        <h1 className="pb-4 mb-2 text-2xl font-bold text-gray-800 font-barlow">
          Aktualna
        </h1>
      </section>
    </div>
  );
};

export default Recipes;
