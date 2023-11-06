import {addProduct, calcStock, products} from './product.serv'

addProduct({
  title: 'Product1',
  createdAt: new Date(2023, 11, 10),
  stock: 10,
});
addProduct({
  title: 'Product2',
  createdAt: new Date(2023, 11, 10),
  stock: 15,
  size: 'M',
});

console.log(products);
const total = calcStock();
console.log(total);
