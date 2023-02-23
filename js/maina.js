let acceso = document.getElementById("formulario2"); 
acceso.addEventListener("submit", validarFormulario2);

function validarFormulario2(e){
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Bienvenido a EagleSports',
      text: 'Acceso exitoso!',
      
    })
    
    console.log(e);
    console.log(e.target); 

    let formularioS = e.target;
    // console.log(formulario);
    console.log(formularioS[0].value); 
    console.log(formularioS[1].value);
    console.log(formularioS[2].value);
    console.log("Acceso Exitoso");
}

let btnAcceso = document.getElementById('formulario2');
btnAcceso.addEventListener('submit', validacion);
function validacion (e){
  e.preventDefault();
 
  const email = document.getElementById('email3');
  const passwordA = document.getElementById('pass3');
  
  
  if (email.value === "") {
    Swal.fire(
        'Anota tu direccion de mail que registraste!'
        );
    email.focus();
    return false;
  }
    if (passwordA.value === "") {
    Swal.fire(
        'Anota tu contraseña para ingresar'
        );
    passwordA.focus();
    return;
      }
  if (passwordA.value === '12345678') {
    Swal.fire({
      icon: 'success',
      title: 'Bienvenido a EagleSports',
      text: 'Acceso exitoso!',
      
    });
   
    } else {
        Swal.fire({
           icon: 'error',
           title: 'Password incorrecto!!! intentalo de nuevo!',
           text: 'Tu password debe ser de 8 a 15 caracteres!',
        });
    }
      
  } 
 
    
  
  

