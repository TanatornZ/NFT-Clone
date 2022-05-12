import Image from "next/image";
import Router from "next/router";
import React, { useContext, useState } from "react";
import { HiMenuAlt1, HiOutlinePlus } from "react-icons/hi";
import { AuthStateContext, AuthType } from "../../context/AuthContext";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import Title from "../Title";
import ToggleNavbar from "./ToggleNavbar";
type Props = {};

function Navbar({}: Props) {
  const [toggle, setToggle] = useState<boolean>(false);

  const { login , setLogin} = useContext<AuthType>(AuthStateContext);

  const logout = () => {
    setLogin(false);
    Router.push('/')
  }

  return (
    <div className="relative ">
      <div className="flex bg-main p-8 justify-between items-center z-20 md:px-24 border-b border-border">
        <div className=" flex items-center">
          <Title />
          <div className="hidden xl:flex ml-8 items-center ">
            <input
              type="text"
              name=""
              id=""
              placeholder="Seach Item Here"
              className="bg-[#1B1A21] py-2 px-4 rounded-xl"
            />
            <p className="text-white text-xl ml-5">Explore</p>
            <p className="text-white text-xl ml-5">My Items</p>
            {login && <p className="text-white text-xl ml-5 cursor-pointer" onClick={logout}>Logout</p>}
          </div>
        </div>

        <div className="flex items-center ">
          {login ? (
            <>
              <div className="mr-3 hidden md:block">
                <PrimaryButton text="Create" goto="create" />
              </div>
              <div className="mr-6 hidden md:block">
                <SecondaryButton text="Connect" />
              </div>
            </>
          ) : (
            <>
              <div className="mr-3 hidden md:block">
                <PrimaryButton text="sign In" goto="login" />
              </div>
              <div className="mr-6 hidden md:block">
                <SecondaryButton text="sign Up" goto="register" />
              </div>
            </>
          )}
          <div className="xl:hidden">
            {toggle ? (
              <HiOutlinePlus
                className="stroke-white rotate-45 w-7 h-7"
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <HiMenuAlt1
                className="fill-white rotate-180 w-7 h-7"
                onClick={() => setToggle(!toggle)}
              />
            )}
          </div>
        </div>
      </div>
      <ToggleNavbar toggle={toggle} />
    </div>
  );
}

export default Navbar;
