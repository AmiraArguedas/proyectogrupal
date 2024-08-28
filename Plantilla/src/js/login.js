
import { obtenerUsuarios } from "../services/getUsers"; // obtiene los usuarios del server

const numCedula = document.getElementById("numCedula") // input para ingresar cedula
const contraL = document.getElementById("contraL") // input para ingresar contra
const botonL = document.getElementById("botonL") // boton patra iniciar sesion

botonL.addEventListener("click", function () { // evento del boton de iniciar sesion
    
validar() // llamado a la function
   async function validar() { // se crea funcion para quitar promesa
        const usuarios = await obtenerUsuarios(); // obtiene los datos que trae la funcion
        console.log("usuarios obtenidos:", usuarios); // muestra en consola los datos que se obtuvieron de usuarios registrados
        
   for (let index = 0; index < usuarios.length; index++) { // recorre los datos que estan en el server
 
    // valida que los datos que se estan ingresando en los inputs sean los mismos que estan en el servidor de registro
        if (usuarios[index].cedula === numCedula.value && usuarios[index].contra === contraL.value) {

            Swal.fire({ // sweet alert "iniciaste sesion"
                position: "center",
                icon: "success",
                title: "Iniciaste Sesion",
                showConfirmButton: false,
                timer: 2000

            }); // cierre del sweet alert
                    
            setTimeout(() => { // contador que relocaliza al usuario inmediatamente despues que hace un login exitoso
                window.location.href = "../main.html"; // relocaliza al main (pagina principal)
            }, 3000); // cierre del time-out (cuenta 3 segundos)
                     
            //  guarda y precarga datos en el formulario e indica si se registro como admin o estudiante
            localStorage.setItem("datoUsuario", JSON.stringify(usuarios[index])||[])
           
        } // cierre del if
    } // cierre del for
} // cierre del async function 
    
    Swal.fire({ // sweet alert "usuario no existe"
        icon: "error",
        title: "Oops...",
        text: "Este usuario no existe",
      }); // cierre del sweet alert
      
}) // cierre del boton de iniciar sesion
