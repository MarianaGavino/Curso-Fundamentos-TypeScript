(() => {
  let productTitle: string = 'My product';
  // productTitle = null;
  // productTitle = () => {};
  // productTitle = 123;
  productTitle = 'My product changed';
  console.log('productTitle', productTitle);

  let productDescription = "I'm a product";

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
  title: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  isNew: ${isNew}
  `;
  console.log(summary);
}) ();
