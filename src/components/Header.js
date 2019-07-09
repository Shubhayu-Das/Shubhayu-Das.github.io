import React, { Component } from "react";
import {
	Navbar,
	Nav,
	NavItem,
	Collapse,
	NavbarToggler,
	NavbarBrand,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";

import "../stylesheets/Header.css";

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
		};

		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	render() {
		return (
			<React.Fragment>
				<Navbar className="bg-dark" expand="md">
					<div className="container-fluid">
						<NavbarBrand className="mr-auto">
							<Link to="/home" className="text-decoration-none">
								<div className="header-name">Shubhayu Das</div>
							</Link>
						</NavbarBrand>
						<NavbarToggler className="float-right" onClick={this.toggleNav}>
							<i className="fas fa-bars" />
						</NavbarToggler>
						<Collapse isOpen={this.state.isOpen} navbar>
							<div className="menuItems ml-auto">
								<Nav navbar>
									<NavItem>
										<NavLink
											onClick={this.toggleNav}
											className="nav-link menuitem"
											to="/blogs">
											Blogs
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											onClick={this.toggleNav}
											className="nav-link menuitem"
											to="/projects">
											Projects
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											onClick={this.toggleNav}
											className="nav-link menuitem"
											to="/books_read">
											Books Read
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink
											onClick={this.toggleNav}
											className="nav-link menuitem"
											to="/certification">
											Certification
										</NavLink>
									</NavItem>
								</Nav>
							</div>
						</Collapse>
					</div>
				</Navbar>
			</React.Fragment>
		);
	}
}

export default Header;
