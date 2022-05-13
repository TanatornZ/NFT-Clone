import React from "react";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
import Field from "./inputField/Field";

type Props = {};

function Login({}: Props) {
  return (
    <div className="py-8 px-5 md:px-8  bg-card flex flex-col w-2/3 md:max-w-sm rounded-xl mx-auto text-white">
      <p className="text-4xl text-extrabold text-center">Login</p>

      <div className="flex flex-col mt-3">
        <Field label="Username" type="text" placeholder="Username" />
        <Field label="Password" type="password" placeholder="Password" />

        <div className="flex justify-between mt-5">
          <PrimaryButton text="Login" goto="login" />
          <SecondaryButton text="Register" goto="register" />
        </div>
      </div>
    </div>
  );
}

export default Login;
