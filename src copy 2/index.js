// eslint-disable-next-line no-unused-vars
function checkCC () {
  const elCCNumber = document.getElementById('ccNumber');
  const elCCValidation = document.getElementById('Validacion');
  let message = "";
  if (elCCNumber.value.length === 0 ) {
    message = 'Ingrese el numero de tarjeta'
    elCCValidation.textContent = message;
    elCCNumber.value = null; 
    return
  } 

  const lastDigit = elCCNumber.value.slice(-4);
  const maskedStr = lastDigit.padStart(10, "#");

  // eslint-disable-next-line eqeqeq, no-undef
  if (luhnAlgorithm(elCCNumber.value))
    // eslint-disable-next-line no-undef
    message = `La tarjeta ${maskedStr} es valida`;


  else
    message = `El numero de la tarjeta ${maskedStr} NO es valida`;
  elCCValidation.textContent = message;
  elCCNumber.value = null;
}






// ninput();

// function ninput() {
//   const ccNumber = document.getElementById('ccNumber');
//   ccNumber.addEventListener('keypress', (event) => {
//     event.preventDefault(); //Esto es lo que hace que no deje ingresar letras al input

//     // console.log(event.keyCode)
//     const valorTecla = String.fromCharCode(event.keyCode);
//     //   console.log(valorTecla)
//     const valorParsed = parseInt(valorTecla);
//     // console.log(valorParsed)
//     if (valorParsed) {
//       ccNumber.value = ccNumber.value + valorParsed;
//       // eslint-disable-next-line eqeqeq
//     } else if (valorParsed || valorTecla === "0") {
//       (ccNumber.value += valorParsed);

//     }
//   });
// }

