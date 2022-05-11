import React from "react";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";

type Props = {};

function Login({}: Props) {
  return (
    <div className="py-8 px-5 md:px-8  bg-card flex flex-col w-2/3 md:max-w-sm rounded-xl mx-auto text-white">
      <p className="text-4xl text-extrabold text-center">Login</p>

      <form action="" className="flex flex-col mt-8">
        <label className="text-xl font-bold">Username</label>
        <input
          type="text"
          name=""
          id=""
          className="bg-black p-5 my-3 rounded-xl"
          placeholder="Username"
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
          <PrimaryButton text="Login" />
          <SecondaryButton text="Register" />
        </div>
      </form>
    </div>
  );
}

export default Login;
