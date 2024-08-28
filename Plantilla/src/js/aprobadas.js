
import {obtenerSolicitudes} from "../services/getAprobadas" // obtiene los permisos / solicitudes del server

let divInsertar = document.getElementById("divInsertar") //div para ingresar datos del formulario ("divPapa")

    obtener() // llamado a la function
    async function obtener() { // se crea funcion para quitar promesa
            let solicitudes = await obtenerSolicitudes(); // obtiene los datos que trae la funcion
            console.log("solicitudes aprobadas:", solicitudes); // muestra las solicitudes que se llenaron en el formulario 
         
      for (let index = 0; index < solicitudes.length; index++) { // para que recorra los datos que estan en el server
    
        // se crean etiquetas - create element 

        let divHijo = document.createElement("div")

        let textoNombre = document.createElement("p")
        let textoSelector = document.createElement("p")
        let textoSalida = document.createElement("p")
        let textoRegreso = document.createElement("p")
        let textoCodigo = document.createElement("p")
        let estadoAprobado = document.createElement("p")

        
        //se crean clases para dar estilo en css
        divHijo.className = "divHijo"

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

        // inserta las etiquetas dentro del div vacio creado en HTML
        divHijo.appendChild(textoNombre)
        divHijo.appendChild(textoSelector)
        divHijo.appendChild(textoSalida)
        divHijo.appendChild(textoRegreso)
        divHijo.appendChild(textoCodigo)
        divHijo.appendChild(estadoAprobado)

        // se inserta en el div de HTML el div creado en JS que ya tiene la informacion 
        divInsertar.appendChild(divHijo)

      } // cierre del for
} // cierre de la funcion asincrona

let btnVolver = document.getElementById("btnVolver")

     // boton para regresar a main
     btnVolver.addEventListener("click", function () { // evento del boton
        window.location.href = "../main.html"; 
}) // cierre del boton








