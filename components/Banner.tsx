import Image from 'next/image'
import React from 'react'

type Props = {}

function Banner({}: Props) {
  return (
    <div className='flex justify-between items-center bg-gradient-to-r from-primary to-seccond mt-8 md:mt-16 mx-4 py-8 px-8 rounded-3xl relative md:mx-24 lg:py-16'>
        <p className='text-xl md:text-4xl lg:text-5xl w-1/2 text-white font-bold p-4 lg:ml-8'>Discover, collect, and sell extraordinary NFTs</p>
        <div className='shake-vertical  w-28 h-20 md:w-52 md:h-28 mt-3 lg:w-40 lg:h-36'>
            <Image src='/images/coin.png' layout='fill' alt='coin' />
        </div>
    </div>
  )
}

export default Banner