import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty.</p> : cart.map((item) => (
        <div key={item._id} className="border p-4 my-2">
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => removeFromCart(item._id)} className="bg-red-500 text-white px-2 py-1">Remove</button>
        </div>
      ))}
      {cart.length > 0 && (
        <>
          <button onClick={clearCart} className="bg-red-500 px-4 py-2 text-white">Clear Cart</button>
          <Link to="/checkout" className="bg-green-500 px-4 py-2 text-white">Proceed to Checkout</Link>
        </>
      )}
    </div>
  );
};

export default Cart;
