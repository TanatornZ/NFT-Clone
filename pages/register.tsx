import React, { ReactElement } from "react";
import Layout from "../components/Layout";
import Register from "../components/register/Register";

type Props = {};

export default function register({}: Props) {
  return (
    <div className="bg-main py-12">
      <Register />
    </div>
  );
}

register.getLayout = function getLayout(register: ReactElement) {
  return <Layout>{register}</Layout>;
};
