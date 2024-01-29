export async function loadClients(){
     
const  response = await fetch(import.meta.env.VITE_API_URL)
const clients = await response.json()
return clients;
}

export async function addClients(datos){
    console.log(datos)

    try {
        
        const response = await fetch(import.meta.env.VITE_API_URL, 
            {
                method : 'POST', 
                body :  JSON.stringify(datos), // Convertimos e objeto a JSON
                headers : {
                    'Content-Type' : 'aplication/json' //tipo de contenido que envio, definimos la peticion de tipo JSON
                }
            }
            )
            await response.json() //retorna un true o false
        

    } catch (error) {
        console.log(error)
    }
    
    

}