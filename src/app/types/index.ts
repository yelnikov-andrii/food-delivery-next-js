export interface NavLink {
  url: string;
  name: string;
}

export interface Blog {
  data: string;
  name: string;
  preview: string;
  img: string;
  link: string;
  article: string;
}

export interface DataItem {
  name: string;
  blank?: boolean;
  link?: string;
  mailto?: string;
};

export type Data = DataItem[];

export interface Contact {
  img: string;
  data: Data
}

export interface Category {
  name: string;
  id: number;
  link: string;
}

export interface UserAuth {
  email: string;
  password: string;
}

export interface ProductInt {
  name: string;
  id: number;
  prices?: number[];
  price?: number;
}

export interface PlaceInterface {
  name: string;
  img: string;
}

export interface VacancyInt {
  img: string;
  name: string;
}