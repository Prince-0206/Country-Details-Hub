import React from 'react'
import { Header } from '../UI/Header'
import { Footer } from '../UI/Footer'
import { Outlet } from 'react-router-dom'

export const Applayout = () => {
  return (
    <>
    <Header />
     <Outlet />
    <Footer />
    </>
  )
}
