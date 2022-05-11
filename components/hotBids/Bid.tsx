import Image from "next/image";
import React from "react";
import { BsHeartFill } from "react-icons/bs";
type Props = {
  img: string;
  price: number;
  like: number;
  name: string;
};

function Bid({ img, name, price, like }: Props) {
  return (
    <div className="rounded-xl p-3 bg-card ">
      <div className="relative w-full h-36">
        <Image src={img} layout="fill" className="rounded-xl" alt={`image ${name}`} />
      </div>

      <div className="flex justify-between items-center text-white mt-2 text-xs font-bold">
        <div className=" w-full ">
          <p >{name}</p>
          <p>{price} ETH</p>
        </div>
        <div className=" flex justify-center items-center">
          <BsHeartFill /> <p className='ml-1'>{like}</p>
        </div>
      </div>
    </div>
  );
}

export default Bid;
