import Image from "next/image";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

type Props = {};

function Register({}: Props) {
  return (
    <div className="py-8 px-5 md:px-8  bg-card flex flex-col w-2/3 md:max-w-md rounded-xl mx-auto text-white">
      <p className="text-4xl text-extrabold text-center">Register</p>

      <div className="py-8">
        <p>Upload Profile pic</p>
        <div className="bg-main border mt-3 border-dashed p-5 flex flex-col items-center rounded-xl">
          <div className="relative w-28 h-28">
            <Image src="/images/Image.png" layout="fill" alt="upload Image" />
          </div>
          <p>browes media on your device</p>
        </div>
      </div>

      <div className="flex flex-col mt-8">
        <label className="text-xl font-bold">Upload</label>
        <input
          type="file"
          name=""
          id=""
          className="bg-black p-5 my-3 rounded-xl"
          placeholder="Name"
        />
        <label className="text-xl font-bold">Full Name</label>
        <input
          type="text"
          name=""
          id=""
          className="bg-black p-5 my-3 rounded-xl"
          placeholder="Name"
        />
        <label className="text-xl font-bold">Username</label>
        <input
          type="text"
          name=""
          id=""
          className="bg-black p-5 my-3 rounded-xl"
          placeholder="Username"
        />
        <label className="text-xl font-bold">Email</label>
        <input
          type="email"
          name=""
          id=""
          className="bg-black p-5 my-3 rounded-xl"
          placeholder="Email"
        />
        <label className="text-xl font-bold mt-5">Password</label>
        <input
          type="password"
          name=""
          id=""
          className="bg-black p-5 my-3 rounded-xl"
          placeholder="Password"
        />
        <div className="flex justify-between mt-5">
          <PrimaryButton text="register" />
          <SecondaryButton text="login" goto="login" />
        </div>
      </div>
    </div>
  );
}

export default Register;
