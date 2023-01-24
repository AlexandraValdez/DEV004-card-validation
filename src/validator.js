const validator = {
  isValid(ccNumber) {
    const length = ccNumber.length;
    let count = 0;
    
    for (let i = 0; i < length; i++) {
      let currentDigit = parseInt(ccNumber[i]);
    
      if ((i + 1) % 2 === 0) // para agarrar el segundo digito 
        // si es divisible por 2 entonces se multiplica por 2 si es mayor que 9 
        if ((currentDigit *= 2) > 9) {
          currentDigit -= 9; // Para ajustar el valor, si se excede se resta por 9 ya que es el numero maximo
        } 
          
      count += currentDigit; 
    
    }
    
    return (count % 10) === 0;
    
  },
  maskify (ccNumber) {
    const lastDigit = ccNumber.slice(-4);
    const maskedStr = lastDigit.padStart(ccNumber.length, "#");
    return maskedStr;
  },
};

export default validator;
