import Image from "next/image";
import React from "react";

type Props = {};

function Title({}: Props) {
  return (
    <div className="flex items-center">
      <div className="w-8 h-8 relative">
        <Image src="/images/logo.png" layout="fill" alt="logo" />
      </div>
      <p className="text-white font-extrabold text-lg ml-1 -mt-1">CryptoKet</p>
    </div>
  );
}

export default Title;
