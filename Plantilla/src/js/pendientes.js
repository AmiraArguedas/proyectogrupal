import {obtenerPermisos} from "../services/getPermisos"
import {postHistorial} from "../services/postHistorial"
import {postearAprobados} from "../services/postAprobadas";
import {deletePermisos} from "../services/deletePermisos"


let divHTML = document.getElementById("divHTML") //div para ingresar datos del formulario (appendChild)

obtenerInfoPermisos() // llamado a la function
async function obtenerInfoPermisos() { // se crea funcion para quitar promesa
    let permisos = await obtenerPermisos() // obtiene los datos que trae la funcion
            console.log("Datos obtenidos de los permisos:", permisos); // muestra los datos que llegaron al server de los permisos 

    for (let index = 0; index < permisos.length; index++) { // para que recorra los datos que estan en el server
        
        let borrarId = permisos[index].id
        console.log(borrarId);

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
        botonAceptar.addEventListener("click", function () {
            divHTML.removeChild(divHijo);
            Swal.fire("Solicitud Aceptada");

            let estado = "Aceptado"
            postHistorial(contenidoNombre, contenidoSelectro, contenidoSalida, contenidoRegreso, contenidoCodigo, estado)

            postearAprobados(contenidoNombre, contenidoSelectro, contenidoSalida, contenidoRegreso, contenidoCodigo, estado)
            console.log(estado);

            deletePermisos(borrarId)

        }) // cierre del evento del boton aceptar

        // boton para rechazar solicitud 
        botonRechazar.addEventListener("click", function () {
            divHTML.removeChild(divHijo);
            Swal.fire("Solicitud Rechazada");

            let estado = "Rechazada"
            postHistorial(contenidoNombre, contenidoSelectro, contenidoSalida, contenidoRegreso, contenidoCodigo, estado)
            console.log(estado);

            deletePermisos(borrarId)

        }) // cierre del evento del boton rechazar
    } // cierre del for
} // cierre de la async function