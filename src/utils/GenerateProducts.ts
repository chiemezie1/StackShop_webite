import products from './productsData';
import { Product } from 'src/types/types';

export const generateProducts = (numItems: number, gender: string, country: string): Product[] => {
  const filteredProducts = products.filter(
    (product) => product.gender === gender && product.nationality.toLowerCase() === country.toLowerCase()
  );

  // Shuffle the filtered products
  const shuffledProducts = filteredProducts.sort(() => Math.random() - 0.5);

  // Take the first 'numItems' items
  let resultProducts = shuffledProducts.slice(0, numItems);

  // If the required number of items is not met, complement with items of any gender
  while (resultProducts.length < numItems) {
    const complementItem = shuffledProducts.find((product) => !resultProducts.includes(product));
    if (complementItem) {
      resultProducts.push(complementItem);
    } else {
      // Break the loop if no more complement items are available
      break;
    }
  }

  return resultProducts;
};

export default generateProducts;
