import Router from "next/router";
import React, { useContext } from "react";
import { AuthStateContext, AuthType } from "../../context/AuthContext";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

type Props = {
  toggle: boolean;
};

function ToggleNavbar({ toggle }: Props) {
  const { login, setLogin } = useContext<AuthType>(AuthStateContext);


const logout = () => {
    setLogin(false);
    Router.push('/')
  }
  return (
    <div
      className={`${
        toggle ? "scale-100" : "scale-0"
      } w-48 right-8 md:right-24 absolute flex flex-col items-end bg-main p-5 transition-transform duration-700 z-10 rounded-b-xl`}
    >
      <p className="text-white text-xl">Explore</p>
      <p className="text-white text-xl my-3">My Items</p>
      {login && <p className="text-white cursor-pointer text-xl mb-3" onClick={logout}>Logout</p>}
      {login ? (
        <>
          <div className="md:hidden">
            <PrimaryButton text="Create" goto="create" />
          </div>
          <div className="md:hidden mt-3">
            <SecondaryButton text="Connect" />
          </div>
        </>
      ) : (
        <>
          <div className="md:hidden">
            <PrimaryButton text="sign In" goto="login" />
          </div>
          <div className="md:hidden mt-3">
            <SecondaryButton text="sign Up" goto="register" />
          </div>
        </>
      )}
    </div>
  );
}

export default ToggleNavbar;
