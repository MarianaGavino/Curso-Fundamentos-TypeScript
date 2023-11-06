(() => {
  const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total;
  }

  const printTotal = (prices: number[]) => {
    const rta = calcTotal(prices);
    console.log(`EL total es ${rta}`)
  }

  const rta = calcTotal([1,2,1,2])
  console.log(rta);
}) ();
