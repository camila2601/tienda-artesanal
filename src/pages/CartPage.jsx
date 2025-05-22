import React from "react";
import { useCart } from "../CartContext";

function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <h2 className="cart-title">Carrito de compras</h2>
      {cart.length === 0 ? (
        <div className="cart-empty">Tu carrito está vacío.</div>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, idx) => (
              <li className="cart-item" key={idx}>
                <div className="cart-item-info">
                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.name}
                      className="cart-item-img"
                    />
                  )}
                  <div className="cart-item-details">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-price">${item.price}</span>
                  </div>
                </div>
                <button
                  className="cart-remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            Total: ${cart.reduce((sum, item) => sum + Number(item.price), 0)}
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;