import Image from "next/image";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import Field from "../inputField/Field";

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

      <div className="flex flex-col mt-3">
        <Field label="Upload" type="file"  />
        <Field label="Fullname" type="text" placeholder="Fullname" />
        <Field label="Username" type="text" placeholder="Username" />
        <Field label="Email" type="email" placeholder="Email" />
        <Field label="Password" type="password" placeholder="Password" />

        <div className="flex justify-between mt-5">
          <PrimaryButton text="register" />
          <SecondaryButton text="login" goto="login" />
        </div>
      </div>
    </div>
  );
}

export default Register;
