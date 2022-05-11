import React from "react";
import Contact from "./Contact";
import CryptoKet from "./CryptoKet";
import MainFooter from "./MainFooter";
import Support from "./Support";
type Props = {};

function Footer({}: Props) {
  return (
    <div className="border-t bg-footer">
      <div className="flex flex-col md:flex-row justify-between py-12 px-20 lg:max-w-6xl mx-auto">
        <MainFooter />
        <CryptoKet />
        <Support />
      </div>
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <Contact />
      </div>
    </div>
  );
}

export default Footer;
