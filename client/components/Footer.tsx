import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../store/StoreProvider";

const Footer = () => {
  const hmi = useContext(StoreContext);

  const [alarm, setAlarm] = useState<string>("");
  const [warning, setWarning] = useState<string>("");

  useEffect(() => {
    hmi?.alarms.length
      ? setAlarm(
          `${hmi.alarms[0].id} - ${hmi.alarms[0].type} - ${hmi.alarms[0].text}`
        )
      : setAlarm("");
  }, [hmi?.alarms]);

  useEffect(() => {
    hmi?.warnings.length
      ? setWarning(
          `${hmi.warnings[0].id} - ${hmi.warnings[0].type} - ${hmi.warnings[0].text}`
        )
      : setWarning("");
  }, [hmi?.warnings]);

  return (
    <footer
      className={`overflow-hidden flex items-center justify-center w-full h-12 px-4 text-sm font-light text-white bg-blue-600 ${
        hmi?.alarms.length && hmi?.warnings.length && "gap-4"
      }`}
    >
      <section
        className={`bg-red-500 ${
          hmi?.alarms.length ? "px-2 py-1 w-full" : "w-0"
        } rounded-md transition-width duration-500`}
      >
        {alarm}
      </section>
      <section
        className={`${
          hmi?.warnings.length ? "px-2 py-1 w-full" : "w-0"
        } bg-yellow-500 rounded-md w-full transition-width duration-500`}
      >
        {warning}
      </section>
    </footer>
  );
};

export default Footer;
