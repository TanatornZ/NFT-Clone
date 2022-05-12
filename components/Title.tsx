import Image from "next/image";
import Router from "next/router";

import React, { HtmlHTMLAttributes, MouseEvent } from "react";

type Props = {};

function Title({}: Props) {
  
  const goToHome = (e:MouseEvent<HTMLDivElement>) => {
      Router.push('/')
  }

  return (
    <div className="flex items-center cursor-pointer" onClick={goToHome}>
      <div className="w-8 h-8 relative">
        <Image src="/images/logo.png" layout="fill" alt="logo" />
      </div>
      <p className="text-white font-extrabold text-lg ml-1 -mt-1">CryptoKet</p>
    </div>
  );
}

export default Title;
