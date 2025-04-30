import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserCircle } from "react-icons/fa"; 

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="custom-navbar text-color-white">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Roblox</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            {/* Browse Dropdown */}
            <NavDropdown title="Marketplace" id="navbarScrollingDropdown" className="marketplace-dropdown">
              <div className="dropdown-menu-custom">
                <div className="dropdown-column">
                  <h6>Category</h6>
                  <NavDropdown.Item href="#allitems">All items</NavDropdown.Item>
                  <NavDropdown.Item href="#characters">Characters</NavDropdown.Item>
                  <NavDropdown.Item href="#clothing">Clothing</NavDropdown.Item>
                  <NavDropdown.Item href="#accessories">Accessories</NavDropdown.Item>
                  <NavDropdown.Item href="#heads">Heads</NavDropdown.Item>
                  <NavDropdown.Item href="#animations">Animations</NavDropdown.Item>
                </div>
                <div className="dropdown-column">
                  <h6>&nbsp;</h6>
                 
                </div>
              </div>
            </NavDropdown>
            <Nav.Link as={Link} to="/create">Create</Nav.Link>
          </Nav>

          {/* Search Bar & Account Icon Container */}
          <div className="d-flex align-items-center search-container">
            <Form className="d-flex flex-grow-1">
              <Form.Control type="search" placeholder="Search" className="me-2" />
              <Button variant="outline-warning" as={Link} to="/search">Search</Button>
            </Form>
  
            {/* Account Icon */}
            <Link to="/account" className="ms-2">
              <FaUserCircle className="account-icon" size={30} />
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
