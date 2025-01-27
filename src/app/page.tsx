import getProductsByCategory from './lib/getProductsByCategory';
import { Product } from './products/components/FoundOrNotFound/Product';
import { categoriesArr } from '@/data/footer';
import Categories from './main/Categories/Categories';
import { MainProduct } from './main/Product/MainProduct';

export default async function Home() {
  const pizzas = await getProductsByCategory(1, true);
  const sushi = await getProductsByCategory(2, true);
  const shaurma = await getProductsByCategory(3, true);
  const salads = await getProductsByCategory(4, true);
  const snacks = await getProductsByCategory(5, true);
  const mangal = await getProductsByCategory(6, true);
  const soupes = await getProductsByCategory(7, true);

  const categoriesData = [
    { name: 'Піца', link: '/products/pizzas', items: pizzas, category: 'pizzas' },
    { name: 'Суші', link: '/products/sushi', items: sushi, category: 'sushi' },
    { name: 'Шаурма', link: '/products/shaurma', items: shaurma, category: 'shaurma' },
    { name: 'Салати', link: '/products/salads', items: salads, category: 'salads' },
    { name: 'Закуски', link: '/products/snacks', items: snacks, category: 'snacks' },
    { name: 'Мангал', link: '/products/mangal', items: mangal, category: 'mangal' },
    { name: 'Супи', link: '/products/soupes', items: soupes, category: 'soupes' },
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
                category={category.category}
              />
            ))}
          </MainProduct>
        ))}
    </div>
  );
}


