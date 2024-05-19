import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'





function Header() {
  const wishlist= useSelector((state=>state.wishlistReducer))
  const cart= useSelector((state=>state.cartReducer))
  return (
    <div>
       
      <Navbar expand="lg" className="bg-primary psition-fixed top-0 w-100" style={{zIndex:1}}>
      <Container>
        <Navbar.Brand>
        <Link to={'/'} style={{color:"white", fontWeight:"bold",textDecoration:"none"}}>
        <i class="fa-solid fa-truck-fast fa-fade"></i>E-Cart</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link to={'/wishlist'} style={{color:"white", fontWeight:"bold",textDecoration:"none"}}>
            <i class="fa-solid fa-heart text-danger"></i>Wishlist
            <Badge bg="success rounded ms-2">{wishlist.length}</Badge></Link></Nav.Link>
            <Nav.Link><Link to={'/cart'} style={{color:"white", fontWeight:"bold",textDecoration:"none"}}>
            <i class="fa-solid fa-cart-shopping text-warning"></i>Cart
            <Badge bg="success rounded ms-2">{cart.length}</Badge></Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header