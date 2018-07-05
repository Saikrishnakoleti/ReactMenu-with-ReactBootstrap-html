import React, { Component } from 'react'; import {Nav,Navbar,NavItem,MenuItem,NavDropdown,Glyphicon,Button} from "react-bootstrap"; class App extends Component { render() { return (
<Navbar collapseOnSelect>
    <Navbar.Header>
        <Navbar.Brand>
            <a href="#brand">Autofixr</a>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Nav>
            <NavDropdown eventKey={3} title="Dashboard" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Home</MenuItem>
                <MenuItem eventKey={3.2}>Manage Dashboard</MenuItem>
            </NavDropdown>
            <NavItem eventKey={1} href="#">
                Rules
            </NavItem>
            <NavItem eventKey={2} href="#">
                Quality Profile
            </NavItem>
            <NavItem eventKey={2} href="#">
                Administration
            </NavItem>

        </Nav>
        <Nav pullRight>
            <NavDropdown eventKey={3} title="Administration" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>My Account</MenuItem>
                <MenuItem eventKey={3.2}>Log Out</MenuItem>
            </NavDropdown>
            <NavItem eventKey={2} href="#">

                <Glyphicon glyph="search" />

            </NavItem>
            <NavItem eventKey={2} href="#">

                <Glyphicon glyph="question-sign" />

            </NavItem>
        </Nav>

    </Navbar.Collapse>
</Navbar>
); } } 
export default App;