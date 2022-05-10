import React from "react";

type Props = {
  text: string;
};

function PrimaryButton({ text }: Props) {
  return (
    <button className="py-2 px-4 rounded-xl  bg-gradient-to-r from-primary to-seccond">
      <p className="text-white text-xl font-medium">{text}</p>
    </button>
  );
}

export default PrimaryButton;
