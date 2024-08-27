
async function postHistorial(nombreSolicitante, selector, fechaSalida, fechaRegreso, codigoCompu,estado) { 
   
    const historialData = {
        nombreSolicitante,
        selector,
        fechaSalida,
        fechaRegreso,
        codigoCompu,
        estado
    }
    try {
        // Realiza una solicitud POST a la URL especificada
        const response = await fetch('http://localhost:3006/historial', {
            method: 'POST', // Especifica que se esta utilizando el metodo POST
            headers: {
                'Content-Type': 'application/json' // Indica que los datos se envian en formato JSON. en este apartado tambien se pueden enviar tokens
            },
            body: JSON.stringify(historialData) // Convierte el objeto newUser a JSON para enviarlo en el cuer
        });

        // Espera la respuesta en formato JSON
        const data = await response.json();
        // Retorna los datos obtenidos de la respuesta del servidor
        return data; /// siempre hay que ponerlo 
    } catch (error) {
        // Captura y muestra cualquier error que ocurra durante la solicitud
        console.error(error);
    }
}
export {postHistorial};


