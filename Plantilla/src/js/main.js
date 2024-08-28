
const formulario = document.getElementById("formulario") // formulario (que esta en el navbar)
const pendientes  = document.getElementById("pendientes") // solicitudes pendientes (que esta en el navbar)
const historial = document.getElementById("historial") // historial de solicitudes (que esta en el navbar)
const aprobadas = document.getElementById("aprobadas") // solicitudes aprobadas (que esta en el navbar)
const bCerrarSesion = document.getElementById("bCerrarSesion") // boton de cerrar sesion 

//  guarda y precarga datos en el formulario e indica si se registro como admin o estudiante
const valor = JSON.parse(localStorage.getItem("datoUsuario")||[])

     if (valor.select === "estudiante") { // valida si se selecciona estudiante
            pendientes.style.display = "none" // no se mostrara solicitudes pendientes
            historial.style.display = "none" // no se mostrara historial de solicitudes
            aprobadas.style.display = "none" // no se mostrara solicitudes aprobadas
    }else{  
     if ( valor.select === "administrador") { // valida si se selecciona administrador
            formulario.style.display="none" // no se mostrara el formulario
     }
    }

    // boton en main que permite ir a "cerrar sesion"
        bCerrarSesion.addEventListener("click", function () { // evento del boton

             window.location.href = "../login.html"; // relocaliza al login

})