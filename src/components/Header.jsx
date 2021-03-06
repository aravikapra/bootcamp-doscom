import React from 'react';
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap';

import '../custom.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="none" light expand="md" className="navbar">
          <NavbarBrand href="/" className="text-light">
            <img
              src="https://image.ibb.co/euBwHK/logo.png"
              alt=""
              style={{width: '20%'}}
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#welcome" className="text-light">
                  Beranda
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about" className="text-light">
                  Tentang
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#info" className="text-light">
                  Informasi
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#register" className="text-light">
                  Daftar
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact" className="text-light">
                  Kontak
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
