import React from "react";

type Props = {
  text: string;
};

function SecondaryButton({ text }: Props) {
  return (
    <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden  rounded-xl group bg-gradient-to-r from-button-primary to-button-seccond ">
      <div className="relative py-2 px-4 transition-all ease-in duration-75 bg-main rounded-xl  ">
        <p className='text-button-primary text-xl font-medium'>{text}</p>
      </div>
    </button>
  );
}

export default SecondaryButton;
