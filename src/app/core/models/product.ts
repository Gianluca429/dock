export interface Product {
  id: string;
  name: string;
  category: string;
  code: string;
  price: number;
  image: string;
  description: string;
}

export interface CartLine {
  product: Product;
  quantity: number;
}
