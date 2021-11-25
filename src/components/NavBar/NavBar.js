import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import './NavBar.css'


function NavBar() {
	return (
		<>
			<Navbar bg="dark" variant="dark" expand="md">
					<Navbar.Brand>
						<h1 className="logo-title">Gen Barcenas</h1>
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse>
						<Nav className="ms-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#projects">Projects</Nav.Link>
							<Nav.Link href="#about">About Me</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
		</>
	);
}

export default NavBar;