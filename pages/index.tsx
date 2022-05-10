import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Navbar from '../components/navbar/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-main w-screen h-screen'>
      <Navbar />
        <div className="">
          <Banner />
        </div>
    </div>
  )
}

export default Home
