import React from "react";

type Props = {
  label?: string;
  options: string[];
  inputPlaceholder: string;
  inputType: string;
};

function TextAndSelect({ label, options, inputPlaceholder, inputType }: Props) {
  return (
    <>
      {label && <label className="text-xl font-bold mt-5">{label}</label>}
      <div className="flex w-full">
        <input
          type={inputType}
          name=""
          id=""
          className="bg-black p-3 my-2 rounded-xl w-full mr-3"
          placeholder={inputPlaceholder}
        />
        <select className="bg-black p-3 my-2 rounded-xl">
          {options.map((option, i) => (
            <option key={i}> {option}</option>
          ))}
        </select>
      </div>
    </>
  );
}

export default TextAndSelect;
