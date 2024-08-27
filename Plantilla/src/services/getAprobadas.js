
async function obtenerSolicitudes() {
    try {
       const response = await fetch ('http://localhost:3006/aprobadas')
                    // Realiza una solicitud GET a la URL especificada
       
       const data = await response.json();
                    // Espera la respuesta en formato JSON
       
        return data; /// siempre hay que ponerlo 
        // Retorna los datos obtenidos de la respuesta del servidor

    } catch (error) {
            console.log(error);
                    // Captura y muestra cualquier error que ocurra durante la solicitud
    }
}


export {obtenerSolicitudes}