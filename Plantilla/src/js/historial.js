
import {obtenerHistorial} from "../services/getHistorial" // obtiene los permisos / solicitudes del server
import {deleteHistorial} from "../services/deleteHistorial" // elimina los permisos del historial

let divAgregar = document.getElementById("divAgregar") // div vacio en HTML para agregar contenido 

obtenerInfoHistorial() // llamado a la function
async function obtenerInfoHistorial() { // se crea funcion para quitar promesa
    let historial = await obtenerHistorial() // obtiene los datos que trae la funcion

            console.log("Datos del historial obtenidos:", historial); // muestra en consola los datos que llegaron al server del historial 

    for (let index = 0; index < historial.length; index++) { // recorre los datos que estan en el server

        let obtenerId = historial[index].id // accede a los ids (los obtiene y guarda en una variable)
            console.log(obtenerId); // muestra en consola los id que estan en permisos / solcitudes pendientes
   
        const botonBuscador = document.getElementById("botonBuscador") // boton para buscar
        const select = document.getElementById("select") // select para poder seleccionar y filtrar
        const divAceptadas = document.getElementById("divAceptadas") // div para solicitudes aceptadas
        const divRechazadas = document.getElementById("divRechazadas") // div para solicitudes rechazadas

    botonBuscador.addEventListener("click", function () { // evento del boton de registro
          
     if (select.value === "Aceptadas") { // valida si se selecciona solicitudes aceptadas

        divAgregar.style.display = "none" // no se mostrara el div con todas las solicitudes
        divRechazadas.style.display = "none" // no se mostrara el div con solicitudes rechazadas
        divAceptadas.style.display = "inline" // se mostraran el div con solicitudes aceptadas

        // se aplica el filter para filtrar la lista que tenga las aceptadas
        let solicitudesAceptadas = historial.filter(estado => estado.estado === "Aceptado")
            console.log(solicitudesAceptadas); // muestra un mensaje en consola


        // se crean etiquetas - create element 
        let divHijo1  = document.createElement("div")
        let nombre1 = document.createElement("p")
        let sede1 = document.createElement("p")
        let salida1 = document.createElement("p")
        let regreso1 = document.createElement("p")
        let codigo1 = document.createElement("p")
        let estado1 = document.createElement("p")


        //se crean clases para dar estilo en css

        divHijo1.className = "divHijo1"
        
        // se crean variables para que contengan la informacion "especifica" que obtiene el filtro
        let infoNombre1 = solicitudesAceptadas[index].nombreSolicitante
        let infoSede1= solicitudesAceptadas[index].selector 
        let infoSalida1 = solicitudesAceptadas[index].fechaSalida 
        let infoRegreso1 = solicitudesAceptadas[index].fechaRegreso
        let infoCodigo1 = solicitudesAceptadas[index].codigoCompu
        let infoEstado1 = solicitudesAceptadas[index].estado

        // se inserta en las etiquetas (que se mostratran en la pagina) el contenido que esta guardando las variables
        nombre1.innerHTML = infoNombre1
        sede1.innerHTML = infoSede1
        salida1.innerHTML = infoSalida1
        regreso1.innerHTML = infoRegreso1
        codigo1.innerHTML = infoCodigo1
        estado1.innerHTML = infoEstado1
        
        // se agrega en el div vacio las etiquetas
        divHijo1.appendChild(nombre1)
        divHijo1.appendChild(sede1)
        divHijo1.appendChild(salida1)
        divHijo1.appendChild(regreso1)
        divHijo1.appendChild(codigo1)
        divHijo1.appendChild(estado1)

        // se inserta en el div de HTML el div creado en JS que ya tiene la informacion 
        divAceptadas.appendChild(divHijo1)

     }else{

        if (select.value === "Rechazadas") { // valida si se selecciona solicitudes rechazadas

            divAgregar.style.display = "none" // no se mostrara el div con todas las solicitudes
            divAceptadas.style.display = "none" // no se mostrara el div con las solicitudes aceptadas
            divRechazadas.style.display = "inline" // se mostraran el div con solicitudes rechazadas

            // se aplica el filter para filtrar la lista que tenga las rechazadas
            let solicitudesRechazadas = historial.filter(estado => estado.estado === "Rechazada")
                console.log(solicitudesRechazadas);



            // se crean etiquetas - create element 
            let divHijo2 = document.createElement("div")
            let nombre2 = document.createElement("p")
            let sede2 = document.createElement("p")
            let salida2 = document.createElement("p")
            let regreso2 = document.createElement("p")
            let codigo2 = document.createElement("p")
            let estado2 = document.createElement("p")
           

            //se crean clases para dar estilo en css

            divHijo2.className = "divHijo2"

            // se crean variables para que contengan la informacion "especifica" que obtiene el filtro
            let infoNombre2 = solicitudesRechazadas[index].nombreSolicitante
            let infoSede2 = solicitudesRechazadas[index].selector 
            let infoSalida2 = solicitudesRechazadas[index].fechaSalida 
            let infoRegreso2 = solicitudesRechazadas[index].fechaRegreso
            let infoCodigo2 = solicitudesRechazadas[index].codigoCompu
            let infoEstado2 = solicitudesRechazadas[index].estado

            // se inserta en las etiquetas (que se mostratran en la pagina) el contenido que esta guardando las variables
            nombre2.innerHTML = infoNombre2
            sede2.innerHTML = infoSede2
            salida2.innerHTML = infoSalida2
            regreso2.innerHTML = infoRegreso2
            codigo2.innerHTML = infoCodigo2
            estado2.innerHTML = infoEstado2

            // se agrega en el div vacio las etiquetas
            divHijo2.appendChild(nombre2)
            divHijo2.appendChild(sede2)
            divHijo2.appendChild(salida2)
            divHijo2.appendChild(regreso2)
            divHijo2.appendChild(codigo2)
            divHijo2.appendChild(estado2)

            // se inserta en el div de HTML el div creado en JS que ya tiene la informacion 
            divRechazadas.appendChild(divHijo2)

        } // cierre del if
     } // cierre del else

     if (select.value === "Todas") {
            divAgregar.style.display = "inline"
            divAceptadas.style.display = "none"

            divRechazadas.style.display = "none"  
 
     } // cierre del if 
}) // cierre del boton de buscar

        // se crean etiquetas - create element 
        let divHijo = document.createElement("div")
        let textoNombreSolicitante = document.createElement("p")
        let textoSedeSeleccionada = document.createElement("p")
        let textoFechaSalida = document.createElement("p")
        let textoFechaRegreso = document.createElement("p")
        let textoCodigoCompu = document.createElement("p")
        let textoEstado = document.createElement("p")
        let borrarIndividual = document.createElement("button")


        //se crean clases para dar estilo en css
        divHijo.className = "divHijo"



        // se crean variables para que contengan la informacion "especifica" que trae / obtiene el get
        let contenidoNombre = historial[index].nombreSolicitante
        let contenidoSelector= historial[index].selector 
        let contenidoSalida = historial[index].fechaSalida 
        let contenidoRegreso = historial[index].fechaRegreso
        let contenidoCodigo = historial[index].codigoCompu
        let contenidoEstado = historial[index].estado

        // se inserta en las etiquetas (que se mostratran en la pagina) el contenido que esta guardando las variables
        textoNombreSolicitante.innerHTML = contenidoNombre
        textoSedeSeleccionada.innerHTML = contenidoSelector
        textoFechaSalida.innerHTML = contenidoSalida
        textoFechaRegreso.innerHTML = contenidoRegreso
        textoCodigoCompu.innerHTML = contenidoCodigo
        textoEstado.innerHTML = contenidoEstado
        borrarIndividual.innerHTML = "BORRAR"

        // se agrega en el div vacio las etiquetas
        divHijo.appendChild(textoNombreSolicitante)
        divHijo.appendChild(textoSedeSeleccionada)
        divHijo.appendChild(textoFechaSalida)
        divHijo.appendChild(textoFechaRegreso)
        divHijo.appendChild(textoCodigoCompu)
        divHijo.appendChild(textoEstado)
        divHijo.appendChild(borrarIndividual)


        // se inserta en el div de HTML el div creado en JS que ya tiene la informacion 
        divAgregar.appendChild(divHijo)

        // boton de borrar del historial
        borrarIndividual.addEventListener("click", function () { // evento del boton
            divAgregar.removeChild(divHijo) // se eliminan el dato que se muestra en pantalla
            Swal.fire("Solicitud Eliminada"); // sweet alert "solicitud eliminada"

            // borra definitivamente la solicitud pendiente del server


            deleteHistorial(obtenerId)

        }) // cierre del evento del boton de borrar
    } // cierre del for 
} //cierre de la async function 


let botonVolver = document.getElementById("botonVolver")

     // boton para regresar a main
     botonVolver.addEventListener("click", function () { // evento del boton
        window.location.href = "../main.html"; 
}) // cierre del boton
