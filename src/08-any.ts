(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {} ;
  myDynamicVar = '';

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLocaleLowerCase();
  console.log(rta);

  myDynamicVar = 123;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
}) ();
