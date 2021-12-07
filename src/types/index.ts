export interface User {
  _id: string;
  name: string;
  email: string;
  __v: number;
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  image: string;
  description: string;
  sold: number;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CartItem {
  _id?: string;
  productId: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  quantity?: number;
}
