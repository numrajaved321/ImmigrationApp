import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
 import Appbar from '../components/Appbar'
import Navbar from '../components/Navbar'
import {Link, Outlet} from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
     <Header/>
    <Appbar/>
    <Navbar/>
   <Outlet/>
    <Footer/>
    </>
  )
}

export default SharedLayout