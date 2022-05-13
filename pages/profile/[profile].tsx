import Image from "next/image";
import React, { ReactElement } from "react";
import HotBids from "../../components/hotBids/HotBids";
import TextAndSelect from "../../components/inputField/TextAndSelect";
import Layout from "../../components/Layout";

type Props = {};

export default function profile({}: Props) {
  return (
    <div className="bg-main">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full h-24 md:h-40 lg:h-56">
          <Image src="/images/profile_banner.png" layout="fill" alt="Banner" />
        </div>
        <div className="-mt-12">
          <div className="mx-auto relative w-24 h-24 rounded-full  border-4 border-main">
            <Image
              src="/images/profile.jpg"
              layout="fill"
              alt="Profile"
              className="rounded-full "
            />
          </div>
          <p className="text-white text-center text-2xl md:text-3xl pt-2 block font-bold">
            James bond
          </p>
        </div>
      </div>
      <div className="hidden md:block text-white mt-12 max-w-md mx-auto">
        <div className="flex justify-center items-center w-full">
          <TextAndSelect inputType="text" inputPlaceholder="Search Item here" options={['Recently Listed' , 'Popular','Low to High','High to Low']}/>

        </div>
      </div>
      <div className="mx-5 md:mx-24 lg:mx-36">
        <HotBids />
      </div>
    </div>
  );
}

profile.getLayout = function getLayout(profile: ReactElement) {
  return <Layout>{profile}</Layout>;
};
