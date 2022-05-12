import React, { ReactElement, useContext } from 'react'
import Layout from '../components/Layout'
import Login from '../components/Login'
import { AuthStateContext, AuthType } from '../context/AuthContext';

type Props = {}

export default function login({}: Props) {

  
  return (
    <div className='bg-main py-12'>
        <Login />
    </div>
  )
}

login.getLayout = function getLayout(login: ReactElement) {

  return (
    <Layout>{login}</Layout>
  )
}