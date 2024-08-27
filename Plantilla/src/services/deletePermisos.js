
async function deletePermisos(borrarId) {
    try {
        const response = await fetch(`http://localhost:3006/permisos/${borrarId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${borrarId}`);
        }

        return { message: `User with id ${borrarId} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export { deletePermisos };
