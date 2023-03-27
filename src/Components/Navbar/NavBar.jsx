import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget'
import Ecommerce from './assets/Ecommerce.svg'

export const Menu= () => {
  return (
      
            <Navbar expand="lg" bg="primary" variant="dark"  className='justify-content-center' >
        <Container>
          <img src={Ecommerce} alt="logo-ecommerce"  />
          <Nav className="me-auto">
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#QuienesSomos" >Quienes Somos</Nav.Link>
            <Nav.Link href="#Productos" >Productos</Nav.Link>
            <Nav.Link href="#Contactos" >Contactos</Nav.Link>
          </Nav>
<CartWidget />

        </Container>
      </Navbar>

      
    
    
  )
}

