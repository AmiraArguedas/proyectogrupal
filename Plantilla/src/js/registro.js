
import { postearUsuario } from "../services/postUsers"; // postea los usuarios en el server 
import {obtenerUsuarios} from "../services/getUsers" // obtiene los usuarios del server

const nombre = document.getElementById("nombre"); // //input nombre para registro
const cedula = document.getElementById("cedula"); // input cedula para registro
const contra = document.getElementById("contra"); // input contra para registrarse
const botonR = document.getElementById("botonR"); // boton para enviar registro
const irLogin = document.getElementById ("irLogin"); // boton para ir a LOGIN desde registro
const select = document.getElementById("select") // select para elegir entre registrarse como administrador o estudiante
const mensajeNombre = document.getElementById("mensajeNombre") // mensaje de error del input de nombre (campo vacio)
const mensajeCedula = document.getElementById("mensajeCedula") // mensaje de error del input de cedula (campo vacio)
const mensajeContra = document.getElementById("mensajeContra") // mensaje de error para el input de contra (campo vacio)

let valorE = false // Variable tipo bandera, para validar datos correctos o datos erroneos

botonR.addEventListener("click", e=>{ // evento del boton de registro 

  resolverPromesa() // llamado a la function
  async function resolverPromesa() { // se crea funcion para quitar promesa
      let infoUsuarios = await obtenerUsuarios() // obtiene los datos que trae la funcion
          
     for (let index = 0; index < infoUsuarios.length; index++) { // recorre los datos que estan en el server

        if (infoUsuarios[index].cedula === cedula.value) { // valida que el numero de cedula NO este previamente registrado
             valorE = true  
             
             Swal.fire({ // sweet alert "numero de cedula ya existente - ya registrado"
                icon: "error",
                title: "Oops...",
                text: "Este número de cedula ya existe"
              }); // cierre del sweet alert
                              
       }  // cierre de if para validar numero de cedula previamente existente    
} // cierre del for

      e.preventDefault() // valida que no se llenen espacios vacios 

          if (nombre.value.trim() === "") { // valida espacios vacios del input nombre
                    mensajeNombre.innerText = "Error este nombre no es valido"                 

        } if (cedula.value.trim() === "") { // Valida espacios vacios del input numero cedula
                    mensajeCedula.innerText = "Error este numero de cedula no es valido"             

        } if (contra.value.trim() === "") { // Valida espacios vacios del input contra
                    mensajeContra.innerText = "Error esta contraseña no es valida"
        }

        // elimina campos vacios de los inputs
        if (nombre.value.trim() && cedula.value.trim() && contra.value.trim() && valorE==false) {
  
          // despues de la validacion, permite registrar - postear el usuario en el server
            postearUsuario(nombre.value, cedula.value, contra.value, select.value)

            Swal.fire({ // sweet alert "registro exitoso"
                position: "center",
                icon: "success",
                title: "Registro exitoso",
                showConfirmButton: false,
                timer: 1500
              }); // cierre del sweet alert

    } // cierre del if 

                    valorE=false   

  } // cierre de la funcion asincrona
}) // cierre del boton de registrar


// boton en registro que permite ir a iniciar sesion 
irLogin.addEventListener("click", function () { // evento del boton

    window.location.href = "../login.html"; // relocaliza al login

})
