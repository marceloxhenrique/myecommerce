export default interface Product {
  id: number;
  // code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  // category: string;
  // quantity: number;
  // inventoryStatus: string;
  // rating: number;
  status: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
}
