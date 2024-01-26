export async function obtenerClientes(){
     
const  response = await fetch(import.meta.env.VITE_API_URL)
const clients = await response.json()
return clients;
}