
async function deleteHistorial(obtenerId) {
    try {
        const response = await fetch(`http://localhost:3006/historial/${obtenerId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${obtenerId}`);
        }

        return { message: `User with id ${obtenerId} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export { deleteHistorial };
