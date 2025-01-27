interface NavLink {
  url: string;
  name: string;
}

 interface Blog {
  data: string;
  name: string;
  preview: string;
  img: string;
  link: string;
  article: string;
}

 interface DataItem {
  name: string;
  blank?: boolean;
  link?: string;
  mailto?: string;
};

 type Data = DataItem[];

 interface Contact {
  img: string;
  data: Data
}

 interface Category {
  name: string;
  id: number;
  link: string;
}

 interface UserAuth {
  email: string;
  password: string;
}

 interface ProductInt {
  name: string;
  id: number;
  prices?: number[];
  price?: number;
  count: number;
  categories: string[];
  components: string;
  img: string;
  sizes: string[];
  souses: string[];
  typeId: number;
  weight: number;
}

 interface ProductAddedInt {
  selectedSize: number;
  selectedSouse: string;
  id: string;
  prices: number[];
  quantity: number;
  name: string;
  img: string;
  price: number;
}

 interface PlaceInterface {
  name: string;
  img: string;
}

 interface VacancyInt {
  img: string;
  name: string;
}

 interface OrderInterface {
  id: number;
  name: string;
  phone: string;
  products: ProductAddedInt[];
  email: string | null;
  status: string;
}