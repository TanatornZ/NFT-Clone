import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { createContext } from "react";

interface Props { 
    children : ReactNode
}

export type AuthType = {
  login: boolean;
  setLogin: Dispatch<SetStateAction<boolean>>;
};

export const AuthStateContext = createContext<AuthType |null>(null);

export const AuthProvider: FC<Props> = ({ children }) => {
  const [login, setLogin] = useState<boolean>(false);

  return (
    <AuthStateContext.Provider value={{ login, setLogin }}>
      {children}
    </AuthStateContext.Provider>
  );
};
