import Image from 'next/image'
import getProductsByCategory from './lib/getProductsByCategory';
import Categories from './components/Main/Categories';
import { categoriesArr } from './data/footerData';
import { MainProduct } from './components/Main/MainProduct';
import { Product } from './components/Products/Product';

export default async function Home() {
  const pizzas = await getProductsByCategory(1);
  const sushi = await getProductsByCategory(2);
  const shaurma = await getProductsByCategory(3);
  const salads = await getProductsByCategory(4);
  const snacks = await getProductsByCategory(5);
  const mangal = await getProductsByCategory(6);
  const soupes = await getProductsByCategory(7);

  return (
    <div 
      className='main'
    >
       <Categories arr={categoriesArr} />
       <MainProduct 
          categoryName="Піца" 
          categoryLink="pizzas" 
        >
          {pizzas && pizzas.map((pizza: any) => (
            <Product 
              product={pizza} 
              key={pizza.id}
              link={`/products/${pizza.id}`}
            />
          ))}
        </MainProduct>
          <MainProduct 
            categoryName="Суші" 
            categoryLink="sushi"
          >
            {sushi && sushi.map((sushiItem: any) => (
              <Product 
                product={sushiItem} 
                key={sushiItem.id}
                link={`/products/${sushiItem.id}`}
              />
            ))}
          </MainProduct>
          <MainProduct 
            categoryName="Шаурма" 
            categoryLink="shaurma" 
          >
            {shaurma && shaurma.map((shaurmaItem: any) => (
              <Product 
                product={shaurmaItem} 
                key={shaurmaItem.id}
                link={`/products/${shaurmaItem.id}`}
              />
            ))}
          </MainProduct>
          <MainProduct 
            categoryName="Салати"
            categoryLink="salads"
          >
            {salads && salads.map((salad: any) => (
              <Product 
                product={salad} 
                key={salad.id}
                link={`/products/${salad.id}`}
              />
            ))}
          </MainProduct>
          <MainProduct 
            categoryName="Закуски"
            categoryLink="snacks"
          >
            {snacks && snacks.map((snack: any) => (
              <Product 
                product={snack} 
                key={snack.id}
                link={`/products/${snack.id}`}
              />
            ))}
          </MainProduct>
          <MainProduct 
            categoryName="Мангал"
            categoryLink="mangal"
          >
            {mangal && mangal.map((mangalItem: any) => (
              <Product 
                product={mangalItem} 
                key={mangalItem.id}
                link={`/products/${mangalItem.id}`}
              />
            ))}
          </MainProduct>
          <MainProduct 
            categoryName="Супи"
            categoryLink="soupes"
          >
            {soupes && soupes.map((soupe: any) => (
              <Product 
                product={soupe} 
                key={soupe.id}
                link={`/products/${soupe.id}`}
              />
            ))}
          </MainProduct>
          {/* <UpButton /> */}
        */
      
    </div>
  );
}


