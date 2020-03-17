import React, {useState} from 'react';
import { NavbarBrand, Navbar, Collapse,NavbarToggler,Nav,NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';

const NavMenu= () => {
    const[isOpen, setOpen] = useState<boolean>(false);
    const toggleNavigation = ()=> {
        setOpen(isOpen =>!isOpen);
    };
    return (
        <div>
          <Navbar color="light" light expand="md" className="navigation">
            <NavbarBrand href="/">Visual 2020</NavbarBrand>
            <NavbarToggler onClick={() => toggleNavigation()} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/"> Home</NavLink>                
              </NavItem>
              </Nav>
              {/* <NavbarText>Simple Text</NavbarText> */}
            </Collapse>
          </Navbar>
        </div>
      );
    };
    
export default NavMenu;