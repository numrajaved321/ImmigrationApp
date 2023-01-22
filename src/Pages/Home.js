import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
 import Appbar from '../components/Appbar'
import Navbar from '../components/Navbar'
import PageSection1 from './PageSection1'
import PageSection2 from './PageSection2'
import Contact from './Contact'


const Home = () => {
  return (
    <>
    <Header/>
    <Appbar/>
    <Navbar/>
      <Contact/>
     {/* < PageSection1/>
     <PageSection2/> */}
    <Footer/>
    </>
  )
}

export default Home