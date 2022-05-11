import Image from 'next/image'
import React from 'react'

type Props = {}

function Banner({}: Props) {
  return (
    <div className='flex justify-between items-center bg-gradient-to-r from-primary to-seccond mt-8 md:mt-16 py-8 px-8 rounded-3xl relative '>
        <p className='text-xl md:text-2xl lg:text-5xl w-1/2 text-white font-extrabold p-4 lg:ml-8'>Discover, collect, and sell extraordinary NFTs</p>
        <div className='shake-vertical  w-20 h-20 md:w-28 md:h-28 mt-3 lg:w-56 lg:h-56'>
            <Image src='/images/coin.png' layout='fill' alt='coin' />
        </div>
    </div>
  )
}

export default Banner