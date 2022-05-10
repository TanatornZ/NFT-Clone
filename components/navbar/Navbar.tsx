import Image from "next/image";
import React, { useState } from "react";
import { HiMenuAlt1, HiOutlinePlus } from "react-icons/hi";
import PrimaryButton from "../buttons/PrimaryButton";
import SeccondaryButton from "../buttons/SecondaryButton";
import ToggleNavbar from "./ToggleNavbar";
type Props = {};

function Navbar({}: Props) {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <div className="flex bg-main p-8 justify-between items-center z-20 md:px-24 border-b">
        <div className=" flex items-center">
          <div className="w-8 h-8 relative">
            <Image src="/images/logo.png" layout="fill" alt="logo" />
          </div>
          <p className="text-white font-bold text-xl ml-1 -mt-1">CryptoKet</p>
          <div className="hidden xl:flex ml-8 items-center ">
            <input type="text" name="" id="" placeholder="Seach Item Here" className="bg-[#1B1A21] py-2 px-4 rounded-xl" />
            <p className="text-white text-xl ml-5">Explore</p>
            <p className="text-white text-xl ml-5">My Items</p>
          </div>
        </div>

        <div className="flex items-center ">
          <div className="mr-3 hidden md:block">
            <PrimaryButton text="sign In" />
          </div>
          <div className="mr-6 hidden md:block">
            <SeccondaryButton text="sign Up" />
          </div>
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
    </>
  );
}

export default Navbar;
