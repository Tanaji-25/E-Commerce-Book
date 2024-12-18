import React, { useContext, useState } from "react";
import "./cart-item-card.styles.css";
import { CartContext } from "../../../App";

const CartItemCard = ({ bookData }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(bookData.quantity || 1); // Initialize with the existing quantity or 1

  const handleRemove = () => {
    setCartItems(cartItems.filter((item) => item.id !== bookData.id));
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from being less than 1
    setQuantity(newQuantity);

    // Update quantity in the global cartItems state
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === bookData.id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <section className="cart-item">
      <div className="cart-item-img-container">
        <img src={bookData.book_url} alt="cart-item-img" className="cart-item-img" />
      </div>
      <div className="cart-item-content-container">
        <h2>{bookData.book_name}</h2>
        <p>{bookData.author_name}</p>
        <h3 className="cart-item-price">
          &#8377;{bookData.price * quantity} {/* Price updates based on quantity */}
        </h3>

        {/* Quantity Controls */}
        <div className="quantity-controls">
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            className="quantity-btn"
          >
            -
          </button>
          <span className="quantity-value">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            className="quantity-btn"
          >
            +
          </button>
        </div>

        {/* Remove Button */}
        <button onClick={handleRemove} className="delete_btn">
          Remove from Cart
        </button>
      </div>
    </section>
  );
};

export default CartItemCard;
