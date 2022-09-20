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
    <footer className="flex items-center justify-center w-full h-12 gap-4 px-4 text-sm font-light text-white bg-blue-600">
      {alarm && (
        <section className="px-2 py-1 bg-red-500 rounded-md grow">
          {alarm}
        </section>
      )}
      {warning && (
        <section className="px-2 py-1 bg-yellow-500 rounded-md grow">
          {warning}
        </section>
      )}
    </footer>
  );
};

export default Footer;
