import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Clients from '../components/Clients';


export function loader() {

  const clients = [
    {
      id: 1,
      nombre: 'Juan',
      telefono: 102013313,
      email: "juan@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 2,
      nombre: 'Karen',
      telefono: 138198313,
      email: "karen@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 3,
      nombre: 'Josue',
      telefono: 31983913,
      email: "josue@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 4,
      nombre: 'Miguel',
      telefono: 319381983,
      email: "miguel@juan.com",
      empresa: 'Codigo Con Juan'
    },
    {
      id: 5,
      nombre: 'Pedro',
      telefono: 1398198938,
      email: "pedro@juan.com",
      empresa: 'Codigo Con Juan'
    },
  ];
  return clients;

}

const Index = () => {

  const clients = useLoaderData();

  return (
    <>
      <h1 className='font-black text-blue-900 text-4xl'>Clients</h1>
      <p className='mt-3'>Manage your clients</p>
      {/* Utilizo Loader, que es muy similar a un useEffect, se ejecuta cuando el componente cargue
      es ideal para cargar un state o para cargar una api que quieras mostrar en el componente y siempre
      tiene que retornar algo*/}
      {/* Utilizo el hook para extraar lo que retorna el loader */}

      {clients.length ? (
        <table className='w-full bg-white shadow mt-5 table-auto'>
          <thead className='bg-blue-800 text-white'>
            <tr>
              <th className='p-2' >Client</th>
              <th className='p-2' >Contact</th>
              <th className='p-2' >Actions</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {clients.map(client => (
              <Clients
              client = {client}
              key = {client.id}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className='text-center mt-10'> No hay CLientes disponibles</p>
      )}


    </>
  )
}

export default Index
