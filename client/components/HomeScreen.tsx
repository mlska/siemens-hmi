import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../store/StoreProvider";
import { ScreenName } from "../types";

const HomeScreen = () => {
  const hmi = useContext(StoreContext);

  useEffect(() => {
    hmi?.handleScreenName(ScreenName.HomeScreen);
  });

  return (
    <main className="flex gap-4 p-4 bg-gray-200 grow">
      <section className="p-4 bg-white shadow-lg basis-9/12 rounded-2xl schrink">
        <h1 className="text-3xl font-bold text-gray-800 font-barlow">
          Panel sterowania
        </h1>
      </section>
      <aside className="flex flex-col gap-4 mr-16 bg-transparent shadow-lg basis-3/12">
        <section className="p-4 bg-white h-1/2 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-800 font barlow">
            System
          </h2>
        </section>
        <section className="p-4 bg-white shadow-lg h-1/2 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-800 font barlow">
            Bezpieczeństwo
          </h2>
        </section>
      </aside>
    </main>
  );
};

export default HomeScreen;
