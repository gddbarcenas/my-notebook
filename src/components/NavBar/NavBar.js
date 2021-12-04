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
						Gen Barcenas
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse>
						<Nav className="ms-auto drop">
							<Nav.Link as={Link} to='/' className="options">Home</Nav.Link>
							<Nav.Link as={Link} to='/projects' className="options">Projects</Nav.Link>
							<Nav.Link as={Link} to='/about'
							className="options-sp">About Me</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
		</>
	);
}

export default NavBar;