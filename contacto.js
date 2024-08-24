
const botonEnviar = document.getElementById("boton");
const formulario = document.getElementById("formulario");
const inputMensaje = document.getElementById("mensaje");
const inputCorreo = document.getElementById("correo");
const inputSelector = document.getElementById("selector");


botonEnviar.addEventListener("click", () => {
    let pasaLasValidaciones = validarInputsFormulario();

    if (!pasaLasValidaciones) {
        alert("El formulario no está completo");
        return; 
    }
    else {
        alert("El formulario fue enviado con exito");
    }

    
});



function validarInputsFormulario() {
    if (inputCorreo.value == "" || inputMensaje.value == "" || inputSelector.value == "") {
        return false;
    }
    return true;
}



