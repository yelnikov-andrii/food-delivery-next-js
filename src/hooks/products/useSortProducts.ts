import React from "react";

export const useSortAndSearchProducts = (products: ProductInt[], appliedInput: string, selectedOption: string) => {
  
  const searchedProducts = React.useMemo(() => {
    if (!products) {
      return [];
    }

    if (appliedInput) {
      return products.filter((product: ProductInt) => 
        product.name.toLowerCase().includes(appliedInput.toLowerCase()) 
        || appliedInput.toLowerCase().includes(product.name.toLowerCase()));
    } else {
      return products;
    }
  }, [appliedInput, products]);

  const sortedProducts = React.useMemo(() => {
    switch(selectedOption) {
    case 'За назвою А-Я':
      return searchedProducts.sort((a: ProductInt, b: ProductInt) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    case 'За назвою Я-А':
      return searchedProducts.sort((a: ProductInt, b: ProductInt) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
    case 'За ціною від меншої до більшої':
      return searchedProducts.sort((a: ProductInt, b: ProductInt) => {
        const getPrice = (product: ProductInt) => {
          return product.price || (product.prices && product.prices[0]);
        };
    
        const priceA = getPrice(a);
        const priceB = getPrice(b);

        if (priceA && priceB) {
          return priceA - priceB;
        } else {
          return 0;
        }
      });
    case 'За ціною від більшої до меншої':
      return searchedProducts.sort((a: ProductInt, b: ProductInt) => {
        const getPrice = (product: ProductInt) => {
          return product.price || (product.prices && product.prices[0]);
        };
    
        const priceA = getPrice(a);
        const priceB = getPrice(b);

        if (priceA && priceB) {
          return priceB - priceA;
        } else {
          return 0;
        }
      });
    default:
      return searchedProducts;
    }
  }, [searchedProducts, selectedOption]);

  return { searchedProducts, sortedProducts };
}