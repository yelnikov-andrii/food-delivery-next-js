import getProductsByCategory from './lib/getProductsByCategory';
import Categories from '../components/main/Categories/Categories';
import { MainProduct } from '../components/main/Product/MainProduct';
import { Product } from '../components/productsComponents/FoundOrNotFound/Product';
import { categoriesArr } from '@/data/footer';

export default async function Home() {
  const pizzas = await getProductsByCategory(1);
  const sushi = await getProductsByCategory(2);
  const shaurma = await getProductsByCategory(3);
  const salads = await getProductsByCategory(4);
  const snacks = await getProductsByCategory(5);
  const mangal = await getProductsByCategory(6);
  const soupes = await getProductsByCategory(7);

  const categoriesData = [
    { name: 'Піца', link: '/products/pizzas', items: pizzas },
    { name: 'Суші', link: '/products/sushi', items: sushi },
    { name: 'Шаурма', link: '/products/shaurma', items: shaurma },
    { name: 'Салати', link: '/products/salads', items: salads },
    { name: 'Закуски', link: '/products/snacks', items: snacks },
    { name: 'Мангал', link: '/products/mangal', items: mangal },
    { name: 'Супи', link: '/products/soupes', items: soupes },
  ];

  return (
    <div 
      className='main'
    >
       <Categories arr={categoriesArr} />
       {categoriesData.map((category) => (
          <MainProduct
            key={category.name}
            categoryName={category.name}
            categoryLink={category.link}
          >
            {category.items && category.items.map((item: any) => (
              <Product
                key={item.id}
                product={item}
                link={`/products/${item.id}`}
              />
            ))}
          </MainProduct>
        ))}
    </div>
  );
}


