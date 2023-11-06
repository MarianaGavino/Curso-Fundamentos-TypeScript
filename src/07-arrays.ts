(() => {
  let prices = [1, 2, 2, 1, 1, 212]; //number[]
  prices.unshift(4);

  let products = ['my product', true]; //(string | boolean)[]
  products.unshift(false);

  let mixed: (number | string | boolean)[] = ['my product', true];
  mixed.unshift(10);

  prices.map(item => item * 2);

}) ();
