
import {obtenerPermisos} from "../services/getPermisos" // obtiene los permisos / solicitudes del server
import {postHistorial} from "../services/postHistorial" // postea las solicitudes a un historial (a otro endpoint) 
import {postearAprobados} from "../services/postAprobadas"; // postea las solicitudes aceptadas (a otro endpoint)
import {deletePermisos} from "../services/deletePermisos" // elimina los permisos cuando ya son "filtrados"

let divHTML = document.getElementById("divHTML") //div para ingresar datos del formulario ("divPapa")

obtenerInfoPermisos() // llamado a la function
async function obtenerInfoPermisos() { // se crea funcion para quitar promesa
    let permisos = await obtenerPermisos() // obtiene los datos que trae la funcion
            console.log("Datos obtenidos de los permisos:", permisos); // muestra los datos que llegaron al server de los permisos 


    for (let index = 0; index < permisos.length; index++) { // recorre los datos que estan en el server
        
        let borrarId = permisos[index].id // accede a los ids (los obtiene y guarda en una variable)
        console.log(borrarId); // muestra en consola los id que estan en permisos / solcitudes pendientes

        // se crean etiquetas - create element 
        const divHijo = document.createElement("div")
        const textoNombre = document.createElement("p")
        const textoSede = document.createElement("p")
        const textoFechaSalida = document.createElement("p")
        const textoFechaRegreso = document.createElement("p")
        const textoCodigoCompu = document.createElement("p")
        const estado = document.createElement("p")
        const botonAceptar = document.createElement("button")
        const botonRechazar = document.createElement("button")


      //se crean clases para dar estilo en css
      divHijo.className = "divHijo"

      //se crean clases a los botones de aceptar y rechazar
      botonAceptar.className = "botonAceptar"
      botonRechazar.className = "botonRechazar"

     // se crean variables para que contengan la informacion "especifica" que trae / obtiene el get

 
        let contenidoNombre = permisos[index].nombreSolicitante
        let contenidoSelectro = permisos[index].selector 
        let contenidoSalida = permisos[index].fechaSalida 
        let contenidoRegreso = permisos[index].fechaRegreso
        let contenidoCodigo = permisos[index].codigoCompu

        // se inserta en las etiquetas (que se mostratran en la pagina) el contenido que esta guardando las variables
        textoNombre.innerHTML = contenidoNombre;
        textoSede.innerHTML = contenidoSelectro;
        textoFechaSalida.innerHTML = contenidoSalida;
        textoFechaRegreso.innerHTML = contenidoRegreso;
        textoCodigoCompu.innerHTML = contenidoCodigo;
        
        // ingresa el texto de la etiqueta de manera predeterminada = "pending" - pendiente
        estado.innerHTML = "Pending"

        // inserta texto dentro de los botones (como se van a ver en el HTML)
        botonAceptar.innerHTML = "ACEPTAR"
        botonRechazar.innerHTML = "RECHAZAR"

        // inserta las etiquetas dentro del div vacio creado en HTML
        divHijo.appendChild(textoNombre) // inserta la etiqueta que tiene el nombre del solicitante
        divHijo.appendChild(textoSede) // inserta la etiqueta que tiene la eleccion de sede
        divHijo.appendChild(textoFechaSalida) // inserta la etiqueta que guarda la fecha de salida
        divHijo.appendChild(textoFechaRegreso) // inserta la etiqueta que guarda la fecha de regreso
        divHijo.appendChild(textoCodigoCompu) // inserta la etiqueta que contiene el codigo de la compu 
        divHijo.appendChild(estado) // ingresa el estado de la solicitud - por defecto pendiente
        divHijo.appendChild(botonAceptar) // inserta el boton de aceptar solicitud 
        divHijo.appendChild(botonRechazar) // inserta el boton de rechazar solicitud 
        divHTML.appendChild(divHijo) // inserta todos las etiquetas que tiene el divHijo al divPapa - que fue creado en HTML y estaba vacio 

        // boton para aceptar solicitud 

        botonAceptar.addEventListener("click", function () { //evento del boton
            divHTML.removeChild(divHijo); // se eliminan el dato que se muestra en pantalla
            Swal.fire("Solicitud Aceptada"); // sweet alert "solicitud aceptada"

            let estado = "Aceptado" // cambia el estado de la solicitud a aceptada

            // postea las solicitudes a historial (a otro endpoint)
            postHistorial(contenidoNombre, contenidoSelectro, contenidoSalida, contenidoRegreso, contenidoCodigo, estado)

            // postea las solicitudes aceptadas (a otro endpoint)
            postearAprobados(contenidoNombre, contenidoSelectro, contenidoSalida, contenidoRegreso, contenidoCodigo, estado)
            console.log(estado);

            // borra definitivamente la solicitud pendiente del server

            deletePermisos(borrarId)

        }) // cierre del evento del boton aceptar


        
        // boton para rechazar solicitud 
        botonRechazar.addEventListener("click", function () { //evento del boton
            divHTML.removeChild(divHijo); // se eliminan el dato que se muestra en pantalla
            Swal.fire("Solicitud Rechazada"); // sweet alert "solicitud rechazada"

            let estado = "Rechazada" // cambia el estado de la solicitud a aceptada

            // postea las solicitudes a historial (a otro endpoint)
            postHistorial(contenidoNombre, contenidoSelectro, contenidoSalida, contenidoRegreso, contenidoCodigo, estado)
            console.log(estado);

            // borra definitivamente la solicitud pendiente del server

            deletePermisos(borrarId)

        }) // cierre del evento del boton rechazar
    } // cierre del for

} // cierre de la async function

let botonDevolver = document.getElementById("botonDevolver")

     // boton para regresar a main
            botonDevolver.addEventListener("click", function () { // evento del boton
                    window.location.href = "../main.html"; 
    }) // cierre del boton


