import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCard } from "../context/shoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./cartItem";
import storeItem from "../data/item.json";
type ShoppingCartProps = {
  isOpen: boolean;
};
export const Cart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCard, cartItems } = useShoppingCard();
  return (
    <Offcanvas show={isOpen} onHide={closeCard} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item}></CartItem>
          ))}
          <div className="ms-auto fw-bold fs-5">
            {" "}
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItems) => {
                const item = storeItem.find((i) => i.id == cartItems.id);
                return total + (item?.price || 0) * cartItems.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
