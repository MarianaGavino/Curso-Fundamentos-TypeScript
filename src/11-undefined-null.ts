(() => {
  // let myNumber: number = undefined;
  // let myString: string = null;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null; //Inicializa en null
  myNumber = 10;

  let myString: string | undefined = undefined;
  myString = 'hola';

  // const hi = (name: string | null) => {
  //   let hello = 'Hola ';
  //   if (name) {
  //     hello += name;
  //   } else {
  //     hello += 'nobody';
  //   }
  //   console.log(hello);
  // }

  const hiV2 = (name: string | null) => {
    let hello = 'Hola ';
    hello += name?.toLocaleUpperCase() || 'nobody'; //Optional Chaining
    console.log(hello);
  }
  hiV2('Mariana');
  hiV2(null);
}) ();

/* Optional Chaning
Valida si el valor es null o no.
 */

