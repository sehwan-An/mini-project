import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import {Container, Row, Col, Button} from 'react-bootstrap'
import siteLogo from '../assets/site-logo.png'
import { NavLink, Navigate } from 'react-router'


const SiteHeader = () => {
  const handleClick = () => {
    location.href='/signup'
    
   alert('회원가입으로 이동합니다') 
  }
    return (
    <header className='py-3'>
        <Container> 
<Row className='align-items-center justify-content-between'>
    <Col className='logo'>
<img src={siteLogo} alt="logo" />
    </Col>
    <Col className='d-flex align-items-center gap-3 '>
    <nav>
        <ul className='d-flex gap-3'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/'>about</NavLink></li>
            <li><NavLink to='/'>community</NavLink></li>
        </ul>

    </nav>
    <Button onClick={handleClick}>Register Now <i class="bi bi-arrow-right"></i></Button>
    </Col>
</Row>
        </Container>
    </header>
  )
}

export default SiteHeader