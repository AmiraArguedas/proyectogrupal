import { postearUsuario } from "../services/postUsers";
import {obtenerUsuarios} from "../services/getUsers"

const nombre = document.getElementById("nombre"); // //input nombre 
const cedula = document.getElementById("cedula"); // input cedula
const contra = document.getElementById("contra"); // input contra 
const botonR = document.getElementById("botonR"); // boton registrar
const irLogin = document.getElementById ("irLogin"); // boton para ir a LOGIN
const select = document.getElementById("select") // select para elegir si quiere registrarse como administrador o estudiante
const mensajeNombre = document.getElementById("mensajeNombre") // para el mensaje de error de el input de nombre
const mensajeCedula = document.getElementById("mensajeCedula") // para el mensaje de error de el input de cedula
const mensajeContra = document.getElementById("mensajeContra") // para el mensaje de error para el input de contraseña

let valorE = false // Variable tipo bandera, para validar datos correctos o datos erroneos

botonR.addEventListener("click", e=>{ // boton da funcionalidad al accionarlo

  resolverPromesa()
  async function resolverPromesa() {
      let infoUsuarios = await obtenerUsuarios()
          
     for (let index = 0; index < infoUsuarios.length; index++) { 

        if (infoUsuarios[index].cedula === cedula.value) {
             valorE = true  
             
             // alert para decir que el numero de cedula ya existe
             Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Este número de cedula ya existe"
              });
                              
       }  // cierre de if para ver si el numero de cedula es igual      
} // cierre del for

                    // valida que no se llenen espacios vacios 
                    e.preventDefault()

                    if (nombre.value.trim() === "") {
                 mensajeNombre.innerText = "Error este nombre no es valido"

                // valida espacios vacios del input nombre 

                  } if (cedula.value.trim() === "") {
                   mensajeCedula.innerText = "Error este numero de cedula no es valido"

                // Valida espacios vacios del input numero cedula  

                  } if (contra.value.trim() === "") {
                    mensajeContra.innerText = "Error esta contraseña no es valida"
                 }
                    // despues de la validacion, permite registrar el usuario en el server
                    if (nombre.value.trim() && cedula.value.trim() && contra.value.trim() && valorE==false) {
                    
                        postearUsuario(nombre.value, cedula.value, contra.value, select.value)

                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Registro Exitoso",
                            showConfirmButton: false,
                            timer: 1500
                          });




                    }

                    valorE=false
                     
                
    } // cierre de la funcion asincrona
                         
            }) // cierre del boton de registrar


// boton en registro que permite ir a iniciar sesion 
irLogin.addEventListener("click", function () {
    window.location.href = "../login.html";
})






