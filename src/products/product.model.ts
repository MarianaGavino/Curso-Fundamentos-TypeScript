 type Sizes = 'S' | 'M' | 'L';
 type Product = {
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes; //La variable es opcional
};

export {
  Sizes,
  Product,
}
