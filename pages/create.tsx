import React, { ReactElement } from "react";
import Create from "../components/create/Create";
import Layout from "../components/Layout";

type Props = {};

export default function create({}: Props) {
  return (
    <div className="bg-main py-16">
      <Create />
    </div>
  );
}

create.getLayout = function getLayout(create: ReactElement) {
  return <Layout>{create}</Layout>;
};
