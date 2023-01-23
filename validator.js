// eslint-disable-next-line no-unused-vars
function luhnAlgorithm(ccNumber) {
  const length = ccNumber.length;
  let count = 0;

  //reverse the credit card number, if index (i) is even double the value, if above 9 then adjust value
  for (let i = 0; i < length; i++) {
    let currentDigit = parseInt(ccNumber[i]);
  
    if ((i + 2) % 2 === 0) //para saber si es divisible por 2 y si hay 0 residuos
      // si es divisible por 2 entonces se multiplica por 2 y si excede se resta por 9 que es el numero maximo
      if ((currentDigit *= 2) > 9)
        currentDigit -= 9;
  
    count += currentDigit;
  
  }
  
  return (count % 10) === 0;
  
}
