import React from "react";

type Props = {
  label: string;
  options: string[];
};

function SelectField({ label, options }: Props) {
  return (
    <>
      <label className="text-xl font-bold mt-5">{label}</label>
      <select className="bg-black p-5 my-3 rounded-xl">
        {options.map((option, i) => (
          <option key={i} className="my-2">{option}</option>
        ))}
      </select>
    </>
  );
}

export default SelectField;
