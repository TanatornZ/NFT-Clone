import Router from "next/router";
import React, { MouseEvent, useContext, useEffect } from "react";
import { AuthStateContext, AuthType}  from "../../context/AuthContext";

type Props = {
  text: string;
  goto?: string;
};

function PrimaryButton({ text, goto }: Props) {

  const {setLogin} = useContext<AuthType>(AuthStateContext);

  const goToPage = (e: MouseEvent<HTMLButtonElement>) => {
    if (goto) {
      if (goto == "login") {
        setLogin(true)
      }
      Router.push(`/${goto}`);
    }
  };

  return (
    <button
      className="py-2 px-4 rounded-xl  bg-gradient-to-r from-primary to-seccond"
      onClick={goToPage}
    >
      <p className="text-white  text-md md:text-xl font-medium">{text}</p>
    </button>
  );
}

export default PrimaryButton;
