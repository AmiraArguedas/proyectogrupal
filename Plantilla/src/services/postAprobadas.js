async function postearAprobados(nombreSolicitante, selector, fechaSalida, fechaRegreso, codigoCompu,estado) {
    const aprobadosData={
        nombreSolicitante,
        selector,
        fechaSalida,
        fechaRegreso,
        codigoCompu,
        estado
    }
    try {
        const response = await fetch('http://localhost:3006/aprobadas', { // Realiza una solicitud POST a la URL especificada
            method: 'POST', // Especifica que se esta utilizando el metodo POST
            headers: {
                'Content-Type': 'application/json' // Indica que los datos se envian en formato JSON
            },
            body: JSON.stringify(aprobadosData) // Convierte el objeto newUser a JSON para enviarlo en el cuerpo
        });

        const data = await response.json(); // Espera la respuesta en formato JSON

        return data; /// siempre hay que ponerlo 
                        // Retorna los datos obtenidos de la respuesta del servidor
    } catch (error) {
        console.error(error);
                // Captura y muestra cualquier error que ocurra durante la solicitud
    }
}
export {postearAprobados};



