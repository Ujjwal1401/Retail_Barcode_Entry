import { Product } from '../types';

export const products: Product[] = [
  { barcode: "1001", name: "Chocolate Bar", price: 50, category: "Food" },
  { barcode: "1002", name: "Chips Packet", price: 30, category: "Snacks" },
  { barcode: "1003", name: "Cold Drink", price: 40, category: "Beverage" },
  { barcode: "1004", name: "Bread Loaf", price: 25, category: "Bakery" },
  { barcode: "2001", name: "Shampoo", price: 120, category: "Grocery" },
  { barcode: "2002", name: "Toothpaste", price: 60, category: "Grocery" },
  { barcode: "3001", name: "USB Cable", price: 250, category: "Electronics" },
  { barcode: "3002", name: "Power Bank", price: 899, category: "Electronics" },
  { barcode: "3003", name: "Earphones", price: 799, category: "Accessories" },
  { barcode: "4001", name: "Notebook", price: 40, category: "Stationery" },
  { barcode: "4002", name: "Pen Set", price: 75, category: "Stationery" },
  { barcode: "5001", name: "Detergent", price: 150, category: "Household" },
  { barcode: "5002", name: "Soap Pack", price: 80, category: "Household" }
];

export const findProductByBarcode = (barcode: string): Product | undefined => {
  return products.find(p => p.barcode === barcode);
};
