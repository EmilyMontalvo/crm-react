import React from 'react'; 
import './index.css'
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './components/Layout';
import NewClient from './pages/NewClient';
import Index from './pages/Index';


// en components pongo lo que es reutilizable
//Todos los hijos van a tener el mismo Layout
const router = createBrowserRouter(
[
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true, // Indicamos que aqui se va a renderizar esta pagina por defecto, primera! Igual utilizando el Layout
        element: <Index/>
      },
      {
        path: '/clients/new',
        element: <NewClient/> 

      }
    ]
  },
]
)

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      {/* El Router Provider va a ser el centro de la aplicacion, aqu[i comienza
      a fluir datos sobre los demas comonentes*/}
      {/* Espera un propt */}
      <RouterProvider 
      router = {router}
      />
  </React.StrictMode>,
)
