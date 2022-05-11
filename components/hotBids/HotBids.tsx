import React from "react";
import { hotBids } from "../../json/hotBids";
import SecondaryButton from "../buttons/SecondaryButton";
import Bid from "./Bid";

type Props = {};

function HotBids({}: Props) {
  return (
    <div className="py-12 flex flex-col ">
      <p className="text-center text-3xl text-white font-bold">Hot Bids</p>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 lg:gap-5 mt-8">
        {hotBids.map((bid, index) => (
          <Bid key={index} {...bid} />
        ))}
      </div>

      <div className=" self-center mt-8">
        <SecondaryButton text="Load More" />
      </div>
    </div>
  );
}

export default HotBids;
