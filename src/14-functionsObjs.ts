(() => {
  const login = (data: {email:string, password: string}) => {
    console.log(data.email, data.password);
  }
 // login('example@example.com', "12345");
 login({
  email: 'example@example.com',
  password: 'pass123'
 })

 type Sizes = 'S' | 'M' | 'L';

 const products: any[] = [];

 const addProduct = (data: {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes //La variable es opcional
 }) =>{
  products.unshift(data);
 }

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
}) ();
