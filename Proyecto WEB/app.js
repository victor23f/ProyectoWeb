var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var contraseña = document.getElementById("contraseña");
var correo = document.getElementById("correo");
var error = document.getElementById("error");
var validarCorreo= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
var validarContraseña = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

error.style.color="red";
function enviarFormulario(){
    console.log("Enviando Formulario...");
    var mensajesError=[];
if(nombre.value===null || nombre.value===""){
mensajesError.push("Ingresa tu nombre");
}
if(apellidos.value===null || apellidos.value===""){
    mensajesError.push("Ingresa tus apellidos");
    }
if(validarCorreo.test(correo.value)==true){

}else{
    mensajesError.push("El correo electrónico no es válido");
}
if(validarContraseña.test(contraseña.value)){

}else{
    mensajesError.push("La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula");
}
if(document.getElementById("validarTerminos").checked){

}else{
    mensajesError.push("Debes de aceptar nuestros terminos");
}

error.innerHTML = mensajesError.join(",");
    return false;
}


