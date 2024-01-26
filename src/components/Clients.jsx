import React from 'react'

const Clients = ({ client }) => {

    const { nombre, empresa, email, telefono, id } = client

    return (
        <tr className='border-b'>
            <td className='p-6 space-y-2'>
                <p className='text-2xl text-gray-800'>{nombre}</p>
                <p>{empresa}</p>
            </td>
            <td className='p-6'>
                <p className='text-gray-600'>
                    <span className=' text-gray-800 uppercase font-bold'>Email: </span>
                    {email}
                </p>
                <p className='text-gray-600'>
                    <span className=' text-gray-800 uppercase font-bold'>Phone: </span>
                    {telefono}
                </p>
            </td>
            <td className='p-6 flex gap-3 justify-center'>
                <button type="button" className='bg-blue-600 hover:bg-blue-700 uppercase font-bold text-xs text-white p-4'>
                    Edit
                </button>
                <button type="button" className='bg-red-600 hover:bg-red-700 uppercase font-bold text-xs text-white p-3'>
                    Delete
                </button>

            </td>
        </tr>
    )
}

export default Clients
