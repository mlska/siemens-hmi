import React, { FC } from "react";

interface ISettingsProps {}

const Settings: FC<ISettingsProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 my-16 grow">
      Settings Component
    </div>
  );
};

export default Settings;
