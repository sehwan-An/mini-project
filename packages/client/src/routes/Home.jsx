import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import 'bootstrap/dist/css/bootstrap.min.css'
import SiteHeader from '../layouts/SiteHeader'
import SiteFooter from '../layouts/SiteFooter'
import HomeCarousel from '../components/HomeCarousel'
import {Outlet} from 'react-router'



const Home = () => {
  const [userInfo, setUserInfo] = useState(null)
  useEffect(()=> {
    const cookie = Cookies.get('nexcent')
    if(cookie) {

     setUserInfo(cookie.split('\"')[3])
    
    } 
  },[])

  const handleLogOut = () => {
    if(confirm("로그아웃 하시겠습니까?")){
      Cookies.remove('nexcent')
      location.href='/'
    }
  }

  return (
    <>
    <SiteHeader userInfo={userInfo} handleLogOut={handleLogOut}/>
    <HomeCarousel className='py-3 my-3'/>
    <Outlet />
    <SiteFooter/>
    </>
  )
}

export default Home