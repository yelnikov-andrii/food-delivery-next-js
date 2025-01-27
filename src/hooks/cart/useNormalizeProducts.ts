import React from 'react';

export const useNormalizeProducts = (products: ProductAddedInt[]) => {
  const normalizedProducts = React.useMemo(() => {
    return products.map((product: ProductAddedInt) => {
      const {id, selectedSize, name, selectedSouse, quantity} = product;
      return {id, name, selectedSize, selectedSouse, quantity};
    });
  }, [products]);
  const strProducts = JSON.stringify(normalizedProducts);
  return strProducts;
};
