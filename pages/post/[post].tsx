import Image from "next/image";
import React, { ReactElement } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import Layout from "../../components/Layout";

type Props = {};

export default function post({}: Props) {
  return (
    <div className="flex flex-col px-4 md:px-24 xl:flex-row justify-between items-center">
      <div className="py-4 md:p-12 xl:border-r border-border">
        <div className=" relative rounded-xl w-96 h-96 md:w-[476px] md:h-[476px]  lg:w-[732px] lg:h-[732px]  xl:w-[497px] xl:h-[497px] mx-auto">
          <Image
            src="/images/item1.png"
            layout="fill"
            alt="bid"
            className="rounded-xl object-cover"
          />
        </div>
      </div>
     
      <div className=" text-white mt-5 xl:m-[80px]">
        <p className="text-2xl md:text-3xl font-bold">Abstact Smoke Red Blue</p>
        <p>
          From <span>4.5 ETH</span> ‧ 20 of 25 available
        </p>

        <div className="mt-5">
          <p>Creater</p>
          <div className="flex items-center mt-5">
            <div className=" w-12 h-12  relative   mr-2">
              <Image
                src="/images/seller1.jpg"
                layout="fill"
                alt="profile"
                className="rounded-full"
              />
            </div>
            <p>James Bond</p>
          </div>
        </div>

        <div className="border-t border-border mt-5">
          <p className="mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>

          <div className="pt-8 pb-12 flex flex-initial">
            <PrimaryButton text="Buy For 4.5 ETH" />
            <div className="mr-3"></div>
            <SecondaryButton text="Make Offer" />
          </div>
        </div>
      </div>
    </div>
  );
}

post.getLayout = function getLayout(post: ReactElement) {
  return <Layout>{post}</Layout>;
};
