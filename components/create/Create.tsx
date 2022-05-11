import Image from "next/image";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

type Props = {};

function Create({}: Props) {
  return (
    <div className="text-white w-2/3 mx-auto max-w-xl">
      <p className="mb-5 text-3xl font-bold">Cerate new Item</p>

      <div className="py-5">
        <p className="text-xl">Upload Profile pic</p>
        <div className="bg-card border mt-3 border-dashed p-5 flex flex-col items-center rounded-xl">
          <p className="text-md text-center mb-5">
            JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.
          </p>
          <div className="relative w-28 h-28">
            <Image src="/images/Image.png" layout="fill" alt="upload Image" />
          </div>
          <p className="mt-5">Drag and drop file</p>
        </div>
      </div>

      <form action="" className="flex flex-col mt-8">
        <label className="text-xl font-bold">Upload</label>
        <input
          type="file"
          name=""
          id=""
          className="bg-black p-5 my-3 rounded-xl "
        />
        <label className="text-xl font-bold mt-5">Name</label>
        <input
          type="text"
          name=""
          id=""
          className="bg-black p-5 my-3 rounded-xl"
          placeholder="Item Name"
        />

        <label className="text-xl font-bold mt-5">Description</label>
        <textarea
          className="bg-black p-5 my-3 rounded-xl"
          placeholder="Description of your item"
        />

        <div className="">
          <label className="text-xl font-bold mt-5">Price</label>
          <div className="flex w-full">
            <input
              type="text"
              name=""
              id=""
              className="bg-black p-5 my-3 rounded-xl w-full mr-3"
              placeholder="Price"
            />
            <select className="bg-black p-5 my-3 rounded-xl">
              <option value="ETH">ETH</option>
              <option value="BTC">BTC</option>
              <option value="LTC">LTC</option>
            </select>
          </div>
        </div>

        <label className="text-xl font-bold mt-5">Category</label>

        <select className="bg-black p-5 my-3 rounded-xl">
          <option>Art</option>
          <option>Photography</option>
          <option>Sports</option>
          <option>Collectibles</option>
          <option>Trading Cards</option>
          <option>Utility</option>
        </select>
        <label className="text-xl font-bold mt-5">Available Items</label>
        <input
          type="password"
          name=""
          id=""
          className="bg-black p-5 my-3 rounded-xl"
          placeholder="No of Items"
        />
        <div className="flex justify-end mt-5">
          <PrimaryButton text="Create Item" />
        </div>
      </form>
    </div>
  );
}

export default Create;
