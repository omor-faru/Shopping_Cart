import React from 'react';
import { useCartStore } from '../zustand/state/state';

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:bg-blue-500 transition duration-300">
      <img src={product.img} alt={product.title} className="h-32 mx-auto" />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-xl text-gray-600 font-black hover:text-white">${product.price}</p>
      <h3 className="text-2xl font-bold hover:text-white">{product.description}</h3>
      <button
        className="bg-green-500 text-white px-4 py-2 mt-3 rounded hover:bg-orange-500"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

