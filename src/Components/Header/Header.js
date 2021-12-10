import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Link from "next/link";
const Header = () => {
	return (
		<header>
			<Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
				<Container>
					<Link href="/" passHref>
						<Navbar.Brand>E-commerce</Navbar.Brand>
					</Link>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Link href="/cart" passHref>
								<Nav.Link>
									<i className="fas fa-shopping-cart"></i>{" "}
									Cart
								</Nav.Link>
							</Link>
							<Link href="/login" passHref>
								<Nav.Link>
									<i className="fas fa-user"></i>Sign In
								</Nav.Link>
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
