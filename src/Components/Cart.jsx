import React from 'react';
import { useCartStore } from '../zustand/state/state';
import { ShoppingCart } from 'lucide-react'; // if using icons

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div className="border p-4 rounded shadow w-full max-w-md mx-auto mt-4">
      <div className="flex items-center gap-2 mb-4">
        <ShoppingCart size={40} className="text-orange-600" />
        <h2 className="text-2xl font-semibold">Cart</h2>
      </div>

      {cart.length === 0 ? (
        <p className="text-lg font-black">Your cart is empty.</p>
      ) : (
        <ul className="space-y-2">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <div>
                <span className="font-medium">{item.title}</span> × {item.quantity}
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline font-bold text-lg"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <button
          onClick={clearCart}
          className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
