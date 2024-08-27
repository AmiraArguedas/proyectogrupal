import {postPermisos} from "../services/postPermisos";

let nombreSolicitante = document.getElementById("nombreSolicitante") //input nombre de solicitante
let selector = document.getElementById("selector") // input selector de sedes
let fechaSalida= document.getElementById("fechaSalida") // input fecha de salida
let fechaRegreso= document.getElementById("fechaRegreso")// input fecha de regreso
let codigoCompu = document.getElementById("codigoCompu") // input codigo  de la compu
let checkbox = document.getElementById("checkbox") // input tipo checkbox "terminos y condiciones"
let botonEnviar= document.getElementById("botonEnviar") // input de boton de enviar formulario de solicitud 
let idU = document.getElementById("idU")

botonEnviar.addEventListener("click", function () {
           
    
    if (fechaSalida.value === "") {
            console.log("fecha salida VACIO") // mensaje en caso que NO se ingrese fecha
        }else{
            console.log("fecha salida LLENO");
        }  console.log(fechaSalida.value); // muestra la fecha que se ingresa

    if (fechaRegreso.value === "") {
            console.log("fecha regreso VACIO") // mensaje en caso que NO se ingrese fecha
        }else{
            console.log("fecha regreso LLENO");
        } console.log(fechaRegreso.value); // muestra la fecha que se ingresa

    if (codigoCompu.value.trim() === "") {
            console.log("codigo VACIO")
            console.log("Error este numero de cedula no es valido");
        } else{
            console.log("campo LLENO");
            
        }

       
      // verifica si el checkbox esta checkeado o no (true or false)        
         if (checkbox.checked === false) { // valida si el checkbox esta marcado = falso / false
            console.log("no puede entrar al sistema"); // no puede entrar al sistema
            botonEnviar.disabled = false // desabilita el boton "NO se puede enviar el formualrio"
    
        }else{
    
        if (checkbox.checked === true) { // valida si el checkbox esta marcado = verdadero / true
            console.log("puede entrar al sistema"); // puede entrar al sistema
            botonEnviar.disabled = true // habilita el boton "se pueden enviar el formulario"

            postPermisos(nombreSolicitante.value, selector.value, fechaSalida.value, fechaRegreso.value, codigoCompu.value)
                // hace un post request para enviar datos al servidor local - escribir en el server
           
            } // cierre if 
        } // cierre else 
       
       


}) // cierre del evento del boton de enviar formulario


cargarId()

async function cargarId() {
    
// se usa para precargar los datos en el formulario 
const usuarioLogin = JSON.parse( localStorage.getItem("datoUsuario")||[])

    console.log(usuarioLogin);

    nombreSolicitante.value=usuarioLogin.nombre
    idU.value=usuarioLogin.id  
}

