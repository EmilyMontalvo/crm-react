export async function loadClients() {

    const response = await fetch(import.meta.env.VITE_API_URL)
    const clients = await response.json()
    return clients;
}

export async function addClients(datos) {

    try {

        const response = await fetch(import.meta.env.VITE_API_URL,
            {
                method: 'POST',
                body: JSON.stringify(datos), // Convertimos e objeto a JSON
                headers: {
                    'Content-Type': 'aplication/json' //tipo de contenido que envio, definimos la peticion de tipo JSON
                }
            }
        )
        await response.json() //retorna un true o false
    } catch (error) {
        console.log(error)
    }
}


export async function loadClient(id){
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const clients = await response.json()
    return clients;
}

export async function updateClient(id, data){
    try {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,
            {
                method: 'PUT',
                body: JSON.stringify(data), // Convertimos e objeto a JSON
                headers: {
                    'Content-Type': 'aplication/json' //tipo de contenido que envio, definimos la peticion de tipo JSON
                }
            }
        )
        await response.json() //retorna un true o false
    } catch (error) {
        console.log(error)
    }
}

export async function deleteClient(id){
    try {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,
            {
                method: 'DELETE'
            }
        )
        await response.json() //retorna un true o false
    } catch (error) {
        console.log(error)
    }

}