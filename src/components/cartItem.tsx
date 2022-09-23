import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCard } from "../context/shoppingCartContext";
import storeItem from "../data/item.json";
import { formatCurrency } from "../utilities/formatCurrency";
type CartItemProps = {
  id: number;
  quantity: number;
};
export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCard();
  const item = storeItem.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imageUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      ></img>
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        x
      </Button>
    </Stack>
  );
};
