
import validator from './validator.js';

const submitButton = document.getElementById('submit-button');
submitButton.onclick = checkCC;

function checkCC () {
  event.preventDefault()
  const elCCNumber = document.getElementById('ccNumber');
  const elCCValidation = document.getElementById('Validacion');
  let message = "";

  // eslint-disable-next-line no-cond-assign, no-constant-condition, no-undef
  if (elCCNumber.value.length === 0 ) {
    message = 'Ingrese el numero de tarjeta'; 
    // alert('esta vacio');
    elCCValidation.textContent = message;
    elCCNumber.value = null;
    return;
  }

  // eslint-disable-next-line eqeqeq, no-undef
  if (validator.isValid(elCCNumber.value))
    // eslint-disable-next-line no-undef
    message = `La tarjeta ${validator.maskify(elCCNumber.value)} es valida`;


  else
    message = `El numero de la tarjeta ${validator.maskify(elCCNumber.value)} NO es valida`;
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
