import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import './NavBar.css'
// import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';


function NavBar() {
	return (
		<>
			<Navbar bg="dark" variant="dark" expand="md">
					<Navbar.Brand>
						{/* <h1 className="logo-title">Gen Barcenas</h1> */}
						<Nav.Link className='navbar-logo' as={Link} to='/'>Gen Barcenas</Nav.Link>
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse>
						<Nav className="ms-auto">
							<Nav.Link as={Link} to='/'>Home</Nav.Link>
							<Nav.Link as={Link} to='/projects'>Projects</Nav.Link>
							<Nav.Link as={Link} to='/about'>About Me</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
		</>
	);
}

export default NavBar;