import React from "react";

type Props = {
  label: string;
  type: string;
  placeholder?: string;
  
};

function Field({ label, type, placeholder }: Props) {
  return (
    <>
      <label className="text-xl font-bold py-3">{label}</label>
      {type === 'textarea' ? (
        <textarea
          className="bg-black p-5 my-3 rounded-xl"
          placeholder="Description of your item"
        />
      ) : (
        <input
          type={type}
          name=""
          id=""
          className="bg-black p-5 my-3 rounded-xl"
          placeholder={placeholder}
        />
      )}
    </>
  );
}

export default Field;
