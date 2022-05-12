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
            <div className="bg-main">{children}</div>
        <Footer />
    </>
  )
}

export default Layout