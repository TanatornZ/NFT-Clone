import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

type Props = {
  toggle: boolean;
};

function ToggleNavbar({ toggle }: Props) {
  return (
    <div
      className={`${
        toggle ? "scale-100" : "scale-0"
      } w-48 right-8 md:right-24 absolute flex flex-col items-end bg-main p-5 transition-transform duration-700 z-10 rounded-b-xl`}
    >
      <p className="text-white text-xl">Explore</p>
      <p className="text-white text-xl my-3">My Items</p>
      <div className="md:hidden">
          <PrimaryButton text="Sign In" />
      </div>
      <div className="mt-3"></div>
      <div className="md:hidden">
          <SecondaryButton text="Sing Up" />
      </div>
    </div>
  );
}

export default ToggleNavbar;
