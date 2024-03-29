import React from 'react'; 
import './index.css'
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './components/Layout';
import NewClient, {action as newClientAction} from './pages/NewClient';
import Index, {loader as clientsLoader } from './pages/Index';
import ErrorPage from './components/ErrorPage';
import EditClients from './pages/EditClients';
import { loader as editClientLoader, action as editClientAction } from './pages/EditClients';
import { action as deleteClientAction } from './components/Clients';


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
        element: <Index/>, 
        loader: clientsLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clients/new',
        element: <NewClient/>, 
        action: newClientAction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clients/:clientId/edit', //Despues de los dos puntos ponemos el nombre de la variable para rutas dinamicas
        element: <EditClients/>,
        loader: editClientLoader,
        action: editClientAction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clients/:clientId/delete',
        action: deleteClientAction
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
