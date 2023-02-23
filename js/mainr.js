let registro = document.getElementById("formulario1"); 
registro.addEventListener("submit", validarFormulario); 

function validarFormulario(e){ 
    e.preventDefault(); 
    Swal.fire({
      icon: 'success',
      title: 'Bienvenido a EagleSports',
      text: 'Registro exitoso!'
      
    })
    console.log(e);
    console.log(e.target); 

    let formularioP = e.target;
    
    console.log(formularioP[0].value); 
    console.log(formularioP[1].value);
    console.log(formularioP[2].value); 
    console.log(formularioP[3].value);
    console.log(formularioP[4].value); 
    console.log(formularioP[5].value);
    console.log(formularioP[6].value);
    
    
}

let btnEnviar = document.getElementById('formulario1');
btnEnviar.addEventListener('submit', validacion);

function validacion(e){
e.preventDefault();
  

  const email = document.getElementById('email2');
  const password = document.getElementById('pass2');
  const passMenos = document.querySelector("#pass2").value;
  const passMas = document.querySelector("#pass2").value;
  const nombreDeUsuario = document.getElementById('nombre2');
  const apellidoDeUsuario = document.getElementById('apellido2');
  const ciudad = document.getElementById('ciudad2');
  const sexo = document.getElementById('sexo2');
  const telefono = document.getElementById('telefono2');
  const telefonoMenos = document.querySelector("#telefono2").value;
  const telefonoMas = document.querySelector("#telefono2").value;
  
  if (email.value === "") {
    Swal.fire(
        'Anota una direccion de email!'
        );
    email.focus();
    return false;
  }
  if (password.value == "" ){
    Swal.fire(
        'Password vacio, escribe un password valido!'
        );
    password.focus();
    return false;
  } 
if (passMenos.length >= 8) {
  console.log("Contraseña correcta tiene mas de 8 caracteres"); 
}
else {
  Swal.fire(
    'Tu contraseña debe de ser de 8 a 15 caracteres'
    );
    passMenos.focus();
    return false;
}
if (passMas.length <= 15) {
  console.log("Contraseña correcta tiene menos de 15 caracteres"); 
}
else {
  Swal.fire(
    'Tu contraseña debe de ser de 8 a 15 caracteres'
    );
    passMas.focus();
    return false;
}
  if (nombreDeUsuario.value === "") {
    Swal.fire(
        'Por favor, escribe tu nombre de usuario.!'
        );
    nombreDeUsuario.focus();
    return false;
  }
  if (apellidoDeUsuario.value === "") {
    Swal.fire(
        'Por favor, escribe tu apellido!'
        );
    apellidoDeUsuario.focus();
    return false;
  }
  if (ciudad.value === "") {
    Swal.fire(
        'Por favor, escribe el nombre de tu ciudad.'
        );
    ciudad.focus();
    return false;
  }
  if (sexo.value == "Seleccione una opcion") {
    Swal.fire(
        'Elige tu sexo por favor!'
        );
    sexo.focus();
    return false;
  }
  if (telefono.value == "" ){
    Swal.fire(
        'Telefono vacio, escribe un numero valido!'
        );
    telefono.focus();
    return false;
  } 
  if (telefonoMenos.length >= 10) {
    console.log("Telefono correcto tiene 10 digitos"); 
  }
  else {
    Swal.fire(
      'Tu telefono debe de ser de 10 digitos'
      );
      telefonoMenos.focus();
      return false;
  }
  if (telefonoMas.length <= 10) {
    console.log("Telefono correcto tiene 10 digitos"); 
  }
  else {
    Swal.fire(
      'Anotaste mas de 10 digitos verifica tu informacion '
      );
      telefonoMas.focus();
      return false;
  }
 console.log("Registro exitoso");
}

