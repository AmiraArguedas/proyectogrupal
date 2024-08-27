//////
const formulario = document.getElementById("formulario")
const pendientes  = document.getElementById("pendientes")
const historial = document.getElementById("historial")
const aprobadas = document.getElementById("aprobadas")
const bCerrarSesion = document.getElementById("bCerrarSesion")


const valor = JSON.parse(localStorage.getItem("datoUsuario")||[])

     if (valor.select === "estudiante") {
            pendientes.style.display = "none"
            historial.style.display = "none"
            aprobadas.style.display = "none"
    }else{  
     if ( valor.select === "administrador") { 
            formulario.style.display="none"
     }
    }



bCerrarSesion.addEventListener("click", function () {

    window.location.href = "../login.html";
    
})