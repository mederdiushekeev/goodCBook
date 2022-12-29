import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  return (
    <div>
      <Navbar bg="info" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            Home
          </Navbar.Brand>
          <Navbar.Brand
            onClick={() => navigate("/add")}
            style={{ cursor: "pointer" }}
          >
            Add Contact
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
