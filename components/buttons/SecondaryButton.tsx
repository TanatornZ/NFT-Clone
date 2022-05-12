import  Router  from "next/router";
import React, { MouseEvent } from "react";

type Props = {
  text: string;
  goto? : string;
};

function SecondaryButton({ text , goto }: Props) {
  const goToPage = (e: MouseEvent<HTMLButtonElement>) => {
    if (goto) {
      Router.push(`${goto}`);
    }
  };

  return (
    <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden  rounded-xl group bg-gradient-to-r from-primary to-seccond  " onClick={goToPage}>
      <div className="relative py-2 px-4 transition-all ease-in duration-75 bg-main rounded-xl  ">
        <p className="text-primary text-xl font-medium">{text}</p>
      </div>
    </button>
  );
}

export default SecondaryButton;
