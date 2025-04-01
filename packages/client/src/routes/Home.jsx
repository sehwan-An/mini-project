import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SiteHeader from '../layouts/SiteHeader'
import SiteFooter from '../layouts/SiteFooter'
import HomeCarousel from '../components/HomeCarousel'
import {} from 'react-router'

const Home = () => {
  return (
    <>
    <SiteHeader/>
    <HomeCarousel className='py-3 my-3'/>
    <Outlet />
    <SiteFooter/>
    </>
  )
}

export default Home