import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { StoreContext } from "../store/StoreProvider";
import { defaultUser } from "../helpers/defaults";
import { postData } from "../lib/request";

interface iLoginProps {
  onCancel: () => void;
  isLoginShown: boolean;
}

const LeftMenu: FunctionComponent<iLoginProps> = ({
  onCancel,
  isLoginShown,
}) => {
  const hmi = useContext(StoreContext);

  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validationMessage, setValidationMessage] = useState<string>("");

  const isUserLogged = Boolean(hmi?.user.id);

  const handleOnChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLogin(event.target.value);
  const handleOnChangePassword = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (login && password) {
      postData("/api/login", { login, password }).then((data) => {
        if (data.status === "200") {
          const { id, login, password, level, name, surname } = data.user;
          hmi?.handleLogin({
            id,
            login,
            password,
            level,
            name,
            surname,
          });
          onCancel();
        } else {
          setValidationMessage("Błędny login lub hasło");
        }
      });
    } else {
      setValidationMessage("Nie wpisano wszystkich danych");
    }
  };

  const handleLogout = () => {
    hmi?.handleLogin(defaultUser);
    onCancel();
  };

  useEffect(() => {
    setValidationMessage("");
  }, [isLoginShown]);

  return (
    <>
      <div className="fixed z-50 bg-gray-100 shadow-lg outline-none rounded-2xl animate-scaletranslate top-1/2 left-1/2">
        <div className="px-16 py-12 overflow-x-hidden overflow-y-auto">
          <h1 className="mb-4 text-3xl font-bold text-center text-gray-800 font-barlow">
            Panel Użytkownika
          </h1>
          <form
            className="flex flex-col gap-4 text-gray-600"
            onSubmit={handleSubmit}
          >
            {!isUserLogged && (
              <label className="flex flex-col">
                <span className="">Login:</span>
                <input
                  className="p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleOnChangeLogin}
                  type="text"
                  value={login}
                />
              </label>
            )}
            {!isUserLogged && (
              <label className="flex flex-col">
                <span className="">Hasło:</span>
                <input
                  className="p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleOnChangePassword}
                  type="password"
                  value={password}
                />
              </label>
            )}
            <div className="text-red-600">{validationMessage}</div>
            <div className="flex justify-between gap-4 mt-4">
              {isUserLogged ? (
                <button
                  className="p-4 text-white bg-blue-600 rounded-md grow hover:opacity-90"
                  onClick={handleLogout}
                >
                  Wyloguj
                </button>
              ) : (
                <button
                  className="p-4 text-white bg-blue-600 rounded-md grow hover:opacity-90"
                  type="submit"
                >
                  Zaloguj
                </button>
              )}
              <button
                className="p-4 text-white bg-gray-600 rounded-md hover: grow hover:opacity-90"
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
