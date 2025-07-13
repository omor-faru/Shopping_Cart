import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../Enum/enum'; 

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;




