(() => {
  type Sizes = 'S' | 'M' | 'L';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes; //La variable es opcional
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.unshift(data);
  };

  addProduct({
    title: 'Product1',
    createdAt: new Date(2023, 11, 10),
    stock: 10,
  });
  addProduct({
    title: 'Product2',
    createdAt: new Date(2023, 11, 10),
    stock: 10,
    size: 'M',
  });

  console.log(products);

  products.unshift({
    title: 'Product3',
    createdAt: new Date(2023, 1, 2),
    stock: 20,
    size: 'S'
  })


}) ();
