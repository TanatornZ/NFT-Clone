import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Title from "../Title";

type Props = {};

function main({}: Props) {
  return (
    <div >
      <Title />
      <p className='text-xl text-white py-5'>Get the lastes Updates</p>
      <div className="relative">
        <input
          type="email"
          name=""
          id=""
          className="bg-black p-3 rounded-xl"
          placeholder="Your Email"
        />
        <div className="absolute top-0 right-0">
          <PrimaryButton text="Email Me!" />
        </div>
      </div>
    </div>
  );
}

export default main;
