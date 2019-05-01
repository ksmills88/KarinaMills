import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  import { DiGithub } from "react-icons/di";
  import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io"

export default class MyNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Portfolio</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/karinamills/"><IoLogoLinkedin style={{fontSize: 50, color: "#3077B0"}}/></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/ksmills88"><IoLogoGithub style={{fontSize: 50, color: "#24292D"}}/></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}