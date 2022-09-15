import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-12 font-light text-white bg-blue-600 px-4 gap-4 text-lg">
      <section className="grow bg-red-500 rounded-md px-2 transition">
        1000 - Alarm Krytyczny - Błąd czujnika 1
      </section>
      <section className="grow bg-yellow-500 rounded-md px-2 transition">
        2000 - Ostrzeżenie - Dosyp węgla do pieca
      </section>
      <section className="grow bg-blue-800 rounded-md px-2 transition">
        3000 - Informacja - Poziom baterii 50%
      </section>
    </footer>
  );
};

export default Footer;
