import {obtenerSolicitudes} from "../services/getAprobadas"

let divInsertar = document.getElementById("divInsertar")

    obtener() // llamado a la function
    async function obtener() { // se crea funcion para quitar promesa
            let solicitudes = await obtenerSolicitudes(); // obtiene los datos que trae la funcion
            console.log("solicitudes aprobadas:", solicitudes); // muestra las solicitudes que se llenaron en el formulario 
         
      for (let index = 0; index < solicitudes.length; index++) { // para que recorra los datos que estan en el server
    
        // se crean etiquetas - create element 
        let textoNombre = document.createElement("p")
        let textoSelector = document.createElement("p")
        let textoSalida = document.createElement("p")
        let textoRegreso = document.createElement("p")
        let textoCodigo = document.createElement("p")
        let estadoAprobado = document.createElement("p")

        // ingresa el texto de la etiqueta de manera predeterminada = "aprobada" 
        estadoAprobado.innerHTML = "Aprobada"

        // se crean variables para que contengan la informacion "especifica" que trae / obtiene el get
        let valorNombre = solicitudes[index].nombreSolicitante
        let valorSelector= solicitudes[index].selector 
        let valorSalida = solicitudes[index].fechaSalida 
        let valorRegreso = solicitudes[index].fechaRegreso
        let valorCodigo = solicitudes[index].codigoCompu

        // para verificar que todo este bien (depurar)
        console.log("Nombre:", valorNombre);
        
        // se inserta en las etiquetas (que se mostratran en la pagina) el contenido que esta guardando las variables
        textoNombre.innerHTML = valorNombre
        textoSelector.innerHTML = valorSelector
        textoSalida.innerHTML = valorSalida
        textoRegreso.innerHTML = valorRegreso
        textoCodigo.innerHTML = valorCodigo

        
        divInsertar.appendChild(textoNombre)
        divInsertar.appendChild(textoSelector)
        divInsertar.appendChild(textoSalida)
        divInsertar.appendChild(textoRegreso)
        divInsertar.appendChild(textoCodigo)
        divInsertar.appendChild(estadoAprobado)
      }
}








