import React from 'react'
import { useNavigate, Form, useActionData, redirect } from 'react-router-dom'
import MyForm from '../components/MyForm';
import Error from '../components/Error';
import { addClients } from '../data/clientes';


export async function action({request}){

  // desde el formdata puedo acceder a los datos del formulario
  const formData =  await request.formData()
  const datos = Object.fromEntries(formData)
  const email = formData.get('email')

  //Validación
  const errores = []
  if(Object.values(datos).includes('')){
    errores.push("Todos los campos son necesarios")
  }
  //Regex expresion to validate email
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if(!regex.test(email)){   //Si no se cumple la condicion
    errores.push("El email no es valido")
  }
  //Retornar datos  si hay errores
  if(Object.keys(errores).length){
    return errores
  }
 // Validation is passed
  await addClients(datos)

  return redirect('/') //tambien los actions tienen que retornar algo
  
}

const NewClient = () => {

  const navigate = useNavigate();
  const errores = useActionData();

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
        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}
        <Form
          method='post'
          action=''
          noValidate
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
