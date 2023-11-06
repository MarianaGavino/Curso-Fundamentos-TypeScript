(() => {
  let userId: string | number;
  userId = 123;
  userId = 'AB';

  function greeting  (myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toUpperCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }

  greeting('hola');
  greeting(1234.1212);

}) ();
