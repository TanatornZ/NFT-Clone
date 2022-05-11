import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Footer from '../components/footer/Footer'
import HotBids from '../components/hotBids/HotBids'
import Navbar from '../components/navbar/Navbar'
import TopSeller from '../components/seller/TopSeller'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-main min-w-screen min-h-screen'>
      <Navbar />
        <div className=" mx-5 md:mx-24">
          <Banner />
          <TopSeller />
          <HotBids />
        </div>
      <Footer/>
    </div>
  )
}

export default Home
