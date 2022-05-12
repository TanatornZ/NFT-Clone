import Router from "next/router";
import React, { MouseEvent } from "react";

type Props = {
  text: string;
  goto?: string;
};

function PrimaryButton({ text, goto }: Props) {
  const goToPage = (e: MouseEvent<HTMLButtonElement>) => {
    if (goto) {
      Router.push(`${goto}`);
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
