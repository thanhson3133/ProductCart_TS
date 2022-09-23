import React from "react";
import { Button, Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { useShoppingCard } from "../context/shoppingCartContext";
export const NavbarComponent = () => {
  const { openCard, cartQuantity } = useShoppingCard();
  return (
    <Navbar sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to={"/"} as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to={"/store"} as={NavLink}>
            Store
          </Nav.Link>{" "}
          <Nav.Link to={"/about"} as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
            onClick={openCard}
          >
            Cart
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: "-0.5rem",
                right: "-0.5rem",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </Navbar>
  );
};
