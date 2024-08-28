
import {postPermisos} from "../services/postPermisos"; // postea las solicitudes en el server (desde el form)

let nombreSolicitante = document.getElementById("nombreSolicitante") //input nombre de solicitante
let selector = document.getElementById("selector") // input selector de sedes
let fechaSalida= document.getElementById("fechaSalida") // input fecha de salida
let fechaRegreso= document.getElementById("fechaRegreso")// input fecha de regreso
let codigoCompu = document.getElementById("codigoCompu") // input codigo  de la compu
let checkbox = document.getElementById("checkbox") // input tipo checkbox "terminos y condiciones"
let botonEnviar= document.getElementById("botonEnviar") // input de boton de enviar formulario de solicitud 
let idU = document.getElementById("idU")

const bVolver = document.getElementById("bVolver")

botonEnviar.addEventListener("click", function () { // evento del boton de registro 
   
    // no se permiten campos vacios o inputs sin llenar
    if (fechaSalida.value === '' || fechaRegreso.value === '' || codigoCompu.value.trim() === "") {
        Swal.fire("Datos Incompletos"); // sweet alert "datos incorrectos"

        }else{
            console.log("lleno"); // indica en la consola datos llenos (todos registrados)
        
        console.log(fechaSalida.value); // muestra en consola la fecha que se ingresa
        console.log(fechaRegreso.value); // muestra en la consola la fecha que se ingresa
       
      // verifica si el checkbox esta checkeado o no (true or false)        
         if (checkbox.checked === false) { // valida si el checkbox esta marcado = falso / false
            Swal.fire("Debes aceptar los terminos y condiciones"); // sweet alert "debes "


            botonEnviar.disabled = false // desabilita el boton "NO se puede enviar el formualrio"
    
        }else{
    
        if (checkbox.checked === true) { // valida si el checkbox esta marcado = verdadero / true
            console.log("puede entrar al sistema"); // puede entrar al sistema


            Swal.fire({ // sweet alert "registro exitoso"
                position: "center",
                icon: "success",
                title: "Formulario enviado",
                showConfirmButton: false,
                timer: 1500
              }); // cierre del sweet alert

            botonEnviar.disabled = true // habilita el boton "se pueden enviar el formulario"

            // hace un post request para enviar datos al servidor local - escribir en el server
            postPermisos(nombreSolicitante.value, selector.value, fechaSalida.value, fechaRegreso.value, codigoCompu.value)
           
            } // cierre if 
        } // cierre else 
    } // cierre del else
}) // cierre del evento del boton de enviar formulario


    cargarId() // llamado a la function
    async function cargarId() { 
        
    // se usa para precargar los datos en el formulario 
    const usuarioLogin = JSON.parse( localStorage.getItem("datoUsuario")||[])

    console.log(usuarioLogin); // muestra datos en consola (datos que vienen de localStorage)

    nombreSolicitante.value = usuarioLogin.nombre // se precargan los datos automaticamente
    idU.value = usuarioLogin.id  // se precargan los datos automaticamente
} // cierre de la funcion asincrona

        // boton para regresar a main
                bVolver.addEventListener ("click", function () { // evento del boton
                        window.location.href = "../main.html";   
        }) // cierre del boton
