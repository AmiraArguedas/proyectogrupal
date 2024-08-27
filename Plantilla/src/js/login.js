import { obtenerUsuarios } from "../services/getUsers";

const numCedula = document.getElementById("numCedula") // input paara ingresar cedula
const contraL = document.getElementById("contraL") // input para ingresar contra
const botonL = document.getElementById("botonL") // boton patra iniciar sesion
const select = document.getElementById("select") // select para elegir si es estudiante o administrador



botonL.addEventListener("click", function () {
    
validar()
   async function validar() {
        const usuarios = await obtenerUsuarios();
        console.log("usuarios obtenidos:", usuarios);  
        
   for (let index = 0; index < usuarios.length; index++) {
 
        if (usuarios[index].cedula === numCedula.value && usuarios[index].contra === contraL.value) {
      
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Iniciaste Sesion",
                showConfirmButton: false,
                timer: 2000
            });
        
                     
            
            setTimeout(() => {
                window.location.href = "../main.html"; 
            }, 3000);
                     

              

            // se usa para guardar y precargar datos en el formulario)
            localStorage.setItem("datoUsuario", JSON.stringify(usuarios[index])||[])

            
            }


             
             
              
                     
                // del else
             // cierre del if

        } // cierre del for

    
    } // cierre del async function 
    
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Este usuario no existe",
        
      });
}) // cierre del boton de iniciar sesion



