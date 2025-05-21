import React from "react";
import { useCart } from "../CartContext";

function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="section-container">
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((item, idx) => (
            <li key={idx}>
              {item.name} - ${item.price}
              <button
                style={{
                  marginLeft: 10,
                  color: "white",
                  background: "red",
                  border: "none",
                  borderRadius: 4,
                  padding: "2px 8px",
                  cursor: "pointer",
                }}
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;