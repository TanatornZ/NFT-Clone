import Image from "next/image";
import React from "react";

type Props = {
  id: number;
  name: string;
  total: number;
  img: string;
};

function Seller({ name, total, img, id }: Props) {
  return (
    <div className="py-5 md:py-8 bg-card  mx-3 lg:mx-5 mt-5 flex flex-col justify-center items-center text-white rounded-xl relative">
      <div className="rounded-full flex justify-center items-center w-5 h-5 md:w-8 md:h-8  bg-primary absolute top-3 left-3 ">
        <p className=" font-bold">{id + 1}</p>
      </div>
      <div className="relative h-20 w-20 mb-3">
        <Image
          src={`/images/${img}`}
          layout="fill"
          alt={`seller${name}`}
          className="rounded-full "
        />
        <div className="absolute bottom-0 right-1 w-4 h-4">
          <Image src="/images/verify.png" layout="fill" alt="verify" />
        </div>
      </div>
      <p className="text-md font-bold">{name}</p>
      <p className="text-md font-bold">{total} ETH</p>
    </div>
  );
}

export default Seller;
