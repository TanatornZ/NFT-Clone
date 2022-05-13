import Image from "next/image";
import Router, { useRouter } from "next/router";

import React from "react";
import { BsHeartFill } from "react-icons/bs";
type Props = {
  img: string;
  price: number;
  like: number;
  name: string;
};

function Bid({ img, name, price, like }: Props) {

  const router = useRouter()

  const goToBid = () => {
    router.push("/post/[post]");
  };

  return (
    <div className="rounded-xl p-2 bg-card cursor-pointer" onClick={goToBid}>
      <div className="relative w-full h-44 md:h-72 lg:h-56 ">
        <Image
          src={img}
          layout="fill"
          className="rounded-xl object-cover"
          alt={`image ${name}`}
        />
      </div>

      <div className="flex justify-between items-center text-white mt-2 text-xs font-bold p-2">
        <div className=" w-full ">
          <p>{name}</p>
          <p>{price} ETH</p>
        </div>
        <div className=" flex justify-center items-center">
          <BsHeartFill /> <p className="ml-1">{like}</p>
        </div>
      </div>
    </div>
  );
}

export default Bid;
