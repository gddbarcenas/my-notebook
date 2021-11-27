import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import './NavBar.css'
import { Link } from 'react-router-dom';


function NavBar() {
	return (
		<>
			<Navbar bg="dark" variant="dark" expand="md">
					<Navbar.Brand className='navbar-logo'>
						{/* <Nav.Link className='navbar-logo' to='/'>Gen Barcenas</Nav.Link> */}
						Gen Barcenas
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse>
						<Nav className="ms-auto drop">
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