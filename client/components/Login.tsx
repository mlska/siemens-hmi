import React, { FunctionComponent, useContext, useState } from "react";
import { StoreContext } from "../store/StoreProvider";

interface iLoginProps {
  onCancel: () => void;
  isLoginShown: boolean;
}

const LeftMenu: FunctionComponent<iLoginProps> = ({
  onCancel,
  isLoginShown,
}) => {
  const plc = useContext(StoreContext);

  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleOnChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLogin(event.target.value);
  const handleOnChangePassword = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    console.log("submitted");
    onCancel();
  };

  return (
    <>
      <div className="fixed z-50 -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-lg shadow-lg outline-none top-1/2 left-1/2">
        <div className="m-6 overflow-x-hidden overflow-y-auto">
          <h1 className="mb-4 text-3xl font-bold text-center text-gray-800 font-barlow">
            Logowanie użytkownika
          </h1>
          <form
            className="flex flex-col gap-4 text-gray-600"
            onSubmit={handleSubmit}
          >
            <label className="flex flex-col">
              <span className="">Login:</span>
              <input
                className="p-2"
                onChange={handleOnChangeLogin}
                type="text"
                value={login}
              />
            </label>
            <label className="flex flex-col">
              <span className="">Hasło:</span>
              <input
                className="p-2"
                onChange={handleOnChangePassword}
                type="password"
                value={password}
              />
            </label>
            <div className="flex justify-between gap-4 mt-4">
              <button
                className="p-4 text-white bg-blue-600 rounded grow"
                type="submit"
              >
                Zaloguj
              </button>
              <button
                className="p-4 text-white bg-blue-600 rounded grow"
                onClick={onCancel}
              >
                Anuluj
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LeftMenu;
