import React from "react";

type Props = {};

function Support({}: Props) {
  return (
    <div className="text-white text-left mt-8 md:mt-0">
      <p className="text-2xl">Support</p>
      <ul className="mt-5">
        <li>Help center</li>
        <li className="py-5">Terms of service</li>
        <li>Legal</li>
        <li className="py-5">Privacy policy</li>
      </ul>
    </div>
  );
}

export default Support;
