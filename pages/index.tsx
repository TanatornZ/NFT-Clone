import { ReactElement, useContext, useEffect } from "react";
import Banner from "../components/Banner";

import HotBids from "../components/hotBids/HotBids";
import Layout from "../components/Layout";

import TopSeller from "../components/seller/TopSeller";
import { AuthStateContext } from "../context/AuthContext";

export default function Home() {
 
  useEffect(() => {
    if("serviceWorker" in navigator) {
      navigator.serviceWorker.register('/sw.js')
      .then( registration => {console.log('ServiceWorker is registered',registration);})
      .catch(err => {console.log('ServiceWorker registration failed', err.message)})
    }
  },[])

  return (
    <div className="bg-main min-w-screen min-h-screen">
      {/* <Navbar /> */}
      <div className=" mx-5 md:mx-24 lg:mx-36 pt-8 md:pt-16">
        <Banner />
        <TopSeller />
        <HotBids />
      </div>
      {/* <Footer/> */}
    </div>
  );
}

Home.getLayout = function getLayout(home: ReactElement) {
  return <Layout>{home}</Layout>;
};
