import Image from "next/image";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Field from "../inputField/Field";
import SelectField from "../inputField/SelectField";
import TextAndSelect from "../inputField/TextAndSelect";

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

      <div className="flex flex-col mt-3">
        <Field label="Upload" type="file" />
        <Field label="Name" type="text" placeholder="Item Name" />
        <Field
          label="Description"
          type="textarea"
          placeholder="Description of your item"
        />

        <TextAndSelect
          label="Price"
          inputType="text"
          inputPlaceholder="Price"
          options={["ETH", "BTC", "LCT"]}
        />

        <SelectField
          label="Category"
          options={[
            "art",
            "Photography",
            "Sports",
            "Collectibles",
            "Trading",
            "Utility",
          ]}
        />

        <Field label="Available Items" type="text" placeholder="No of Items" />

        <div className="flex justify-end mt-5">
          <PrimaryButton text="Create Item" />
        </div>
      </div>
    </div>
  );
}

export default Create;
