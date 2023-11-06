(() => {
  type Sizes = 'S' | 'M' | 'L';

  const createProductToJson = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes //La variable es opcional
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    }
  }
  const productos = createProductToJson('P1', new Date(), 12);
  console.log(productos);
  console.log(productos.title);
  console.log(productos.createdAt);
  console.log(productos.stock);
  console.log(productos.size);
}) ();
