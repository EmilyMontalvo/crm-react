import React from 'react'
import { useNavigate, Form, redirect, useActionData } from 'react-router-dom'
import { deleteClient } from '../data/clientes'

export async function action({params}){
    await deleteClient(params.clientId)
    return redirect('/')
}

const Clients = ({ client }) => {

    const navigate = useNavigate()
    const { name, company, phone, email, id } = client

    return (
        <tr className='border-b'>
            <td className='p-6 space-y-2'>
                <p className='text-2xl text-gray-800'>{name}</p>
                <p>{company}</p>
            </td>
            <td className='p-6'>
                <p className='text-gray-600'>
                    <span className=' text-gray-800 uppercase font-bold'>Email: </span>
                    {email}
                </p>
                <p className='text-gray-600'>
                    <span className=' text-gray-800 uppercase font-bold'>Phone: </span>
                    {phone}
                </p>
            </td>
            <td className='p-6 flex gap-3 justify-center'>
                <button
                    type="button"
                    className='bg-blue-600 hover:bg-blue-700 uppercase font-bold text-xs text-white p-4'
                    onClick={() => navigate(`/clients/${id}/edit`)}
                >
                    Edit
                </button>
                <Form
                method='POST'
                action={`clients/${id}/delete`}
                onSubmit={(e) => {
                    if(!confirm('Do you want to delete this client?')){
                        e.preventDefault()
                    }
                }}
                >
                
                <button 
                    type="submit" 
                    className='bg-red-600 hover:bg-red-700 uppercase font-bold text-xs text-white p-3'
                    >
                    Delete
                </button>
                </Form>
               

            </td>
        </tr>
    )
}

export default Clients
