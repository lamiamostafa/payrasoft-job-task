import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Logo from '../../../images/logo.png';


const Header = () => {
    return (

        <nav className="nav">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <ul className="nav_menu">
                <li className="nav_item"><a href='#' className="nav_link">Home</a></li>
                <li className="nav_item dropdown"><a href='#' className="nav_link dropdown-toogle" data-bs-toggle="dropdown">Message</a>
                    {/* <Dropdown >
                        <Dropdown.Toggle id="dropdown-basic">
                            Message
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                </li>
                {/* <NavDropdown title="Message" variant="#1A237E" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                </NavDropdown> */}
                <li className="nav_item"><a href='#' className="nav_link">Contact</a></li>
                <li className="nav_item"><a href='#' className="nav_link">About</a></li>
                <li className="nav_item"><a href='#' className="nav_link">Login</a></li>
                <li className="nav_item"><a href='#' className="nav_link_result">Results</a></li>
            </ul>
            <div className="nav_toggler">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
            </div>

        </nav >

    );
};

export default Header;