import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/TestLogo/TestLogo.png";
import {navLink} from "../data/data.js"
import { Settings , VerticalMenu} from "../assets/Icons/index.js";
import UserProfile from "./UserProfile.jsx";

const Header = () => {
  return (
    <>
      <Navbar>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="Tech Care"></img>
            </Navbar.Brand>
          </LinkContainer>

          <Nav className="justify-content-center nav-container">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="justify-content-center">
                {navLink.map((link) => {
                  const { id, text, icon } = link;
                  return (
                    <Nav.Item className="nav-item" key={id} to="/">
                      <Nav.Link>
                      <i className="icon">{icon} </i>
                      <span>{text}</span>
                      </Nav.Link>
                    </Nav.Item>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Nav>

          <Nav className="justify-content-end" >
            <Nav.Item>
              <Nav.Link><UserProfile/></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Settings/></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><VerticalMenu/></Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;