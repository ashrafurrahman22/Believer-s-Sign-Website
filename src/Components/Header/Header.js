
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    <div>
    <Navbar.Brand id='navName'>  Believer's Sign</Navbar.Brand>
    </div>
    <div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><Link className='navbar' to='/'>Home</Link></Nav.Link>
        <Nav.Link><Link className='navbar' to='/review'>Review</Link></Nav.Link>
        <Nav.Link><Link className='navbar' to='/dashboard'>Dashboard</Link></Nav.Link>
        <Nav.Link><Link className='navbar' to='/blogs'>Blogs</Link></Nav.Link>
        <Nav.Link><Link className='navbar' to='/about'>About</Link></Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
    </div>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;