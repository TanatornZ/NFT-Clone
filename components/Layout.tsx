import React from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'

type Props = {
    children: JSX.Element
}

function Layout({children}: Props) {
  return (
    <>
        <Navbar />
            {children}
        <Footer />
    </>
  )
}

export default Layout