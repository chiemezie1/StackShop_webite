import React, { useEffect, useState } from 'react';
import generateProducts from 'src/utils/GenerateProducts';
import Image from 'next/image';
import * as images from 'src/utils/index';
import { Product, ProductDisplayProps } from 'src/types/types';


const ProductDisplay: React.FC<ProductDisplayProps> = ({ addToCart, number = 2, gender, country }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Generate or fetch products based on provided criteria
    const generatedProducts = generateProducts(number, gender, country);
    setProducts(generatedProducts);
  }, [number, gender, country]);

  return (
    <div className="flex flex-wrap justify-center gap-5 p-5">
      {products.map((product: Product) => (
        <div key={product.id} className="border border-gray-300 p-4 text-center flex-none w-[250px]">
          <div className="relative h-64 w-full flex justify-center items-center overflow-hidden">
            <Image
              src={images[product.name]?.src || ''}
              alt={product.name}
              width={200}
              height={200}
              objectFit="cover"
              className="object-center"
            />
          </div>
          <h2 className="text-lg font-semibold my-3">{product.name}</h2>
          <p className="text-gray-600 mb-4">${product.price}</p>
          <button onClick={() => addToCart(product)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
