import React from "react";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import "./Cart.css";

const CartItems = () => {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <CartItem
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                            total={item.totalPrice}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartItems;
