import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { navLinks } from "../constants";
import {
  Form,
  Offcanvas,
} from "react-bootstrap";
import { useState } from "react";
import SearchInput from "../components/SearchInput";
const NavLayout = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* Main Navbar */}
      <Navbar expand="lg" className="px-3" style={{ color: "#FFF", backgroundColor: 'var(--dark-color)' }}>
        <Container>
          <Navbar.Brand href="#" style={{ color: "#FFF" }}>
            I<span className="primary-text font-bold">Z</span>AM
          </Navbar.Brand>

          {/* Search Bar with Icon */}
          <Form className="d-none d-lg-flex mx-auto w-20">
            <SearchInput />
          </Form>

          {/* Right Aligned Navbar Links */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleShow}
            style={{ backgroundColor: "#FFF", fontSize: ".9rem" }}
            
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-none d-lg-flex">
              {navLinks.map((link, index) => (
                <div key={index} className="d-flex flex-column mx-2 justify-content-center align-items-center">
                  <link.navIcon size={24} />
                  <Nav.Link href="#home" className="text-white">
                    {link.navTitle}
                  </Nav.Link>
                </div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sidebar Offcanvas for Small Screens */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#home" onClick={handleClose}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" onClick={handleClose}>
              About
            </Nav.Link>
            <Nav.Link href="#services" onClick={handleClose}>
              Services
            </Nav.Link>
            <Nav.Link href="#contact" onClick={handleClose}>
              Contact
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavLayout;
