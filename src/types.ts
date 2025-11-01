export interface Product {
  barcode: string;
  name: string;
  price: number;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}
