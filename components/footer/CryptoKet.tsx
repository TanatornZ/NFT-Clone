import React from 'react'

type Props = {}

const CryptoKet = (props: Props) => {
  return (
    <div className='text-white text-left mt-8 md:mt-0'>
        <p className='text-2xl'>CryptoKet</p>
        <ul className='mt-5'>
            <li>Explore</li>
            <li className='py-5'>How it Works</li>
            <li>Counters</li>
            <li className='py-5'>Contact Us</li>
        </ul>
    </div>
  )
}

export default CryptoKet