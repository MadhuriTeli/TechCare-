import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/TestLogo/TestLogo.png";
import {navLink} from "../data/data.js"
import { Settings , VerticalMenu} from "../assets/Icons/index.js";
import UserProfile from "./UserProfile.jsx";

const Header = () => {
  return (
    <>
    <div className="navbar-container" > 
      <Navbar style={{ background: "#ffffff"}}>
            <Navbar.Brand style={{ background: "#ffffff"}}>
              <img style={{ background: "#ffffff"}} src={logo} alt="Tech Care"></img>
            </Navbar.Brand>

          <Nav className="justify-content-center nav-container">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav style={{ background: "#ffffff"}} className="justify-content-center">
                {navLink.map((link) => {
                  const { id, text, icon } = link;
                  return (
                    <Nav.Item style={{ background: "#ffffff"}} className="nav-item" key={id} >
                      <Nav style={{ background: "#ffffff"}}>
                      <i className="icon">{icon} </i>
                      <span className="header-text">{text}</span>
                      </Nav>
                    </Nav.Item>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Nav>

          <Nav style={{ background: "#ffffff"}} className="justify-content-end" >
            <Nav.Item style={{ background: "#ffffff"}}>
              <Nav style={{ background: "#ffffff"}}><UserProfile/></Nav>
            </Nav.Item>
            <Nav.Item style={{ background: "#ffffff"}}>
              <Nav style={{ background: "#ffffff"}}><Settings/></Nav>
            </Nav.Item>
            <Nav.Item style={{ background: "#ffffff"}}>
              <Nav style={{ background: "#ffffff"}}><VerticalMenu/></Nav>
            </Nav.Item>
          </Nav>
      </Navbar>
      </div>
    </>
  );
}

export default Header;