import React from 'react'
import { useNavigate, Form } from 'react-router-dom'
import MyForm from '../components/Form';

export async function action({request}){
  // desde el formdata puedo acceder a los datos del formulario
  const formData =  await request.formData()
 
  const datos = Object.fromEntries(formData)
  console.log(datos)
  return{}

}

const NewClient = () => {

  const navigate = useNavigate();

  return (
    <>
      <h1 className='font-black text-blue-900 text-4xl'>New Client</h1>
      <p className='mt-3'> Fill out all fields to register a new cliente</p>
      <div className='flex justify-end'>
        <button
          type="button"
          className='bg-blue-800 text-white px-3 py-1 font-bold uppercase'
          onClick={() => navigate(-1)} // El menos uno es para que vuelva a la página anterior
        >
          BACK
        </button>
      </div>

      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20' >
        <Form
          method='post'
          action=''
        >
          <MyForm />
          <input type="submit" className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
            value="Register" />
        </Form>
      </div>

    </>
  )
}

export default NewClient
