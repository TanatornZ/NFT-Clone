import React from "react";
import {BsInstagram ,BsTwitter ,BsDiscord} from 'react-icons/bs'
type Props = {};

function Contact({}: Props) {
  return (
    <div className="flex justify-between  py-5 mx-5 border-t">
      <div className="text-white opacity-70">
        <p> © {new Date().getFullYear()} CrpytoKet, Inc. All Rights Reserved</p>
      </div>
      <div className="flex">
            <BsInstagram className="fill-white w-8 h-8"/>
            <BsTwitter className="fill-white w-8 h-8 mx-8"/>
            <BsDiscord className="fill-white w-8 h-8"/>
        </div>
    </div>
  );
}

export default Contact;
