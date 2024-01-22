import React from 'react'; 
import './index.css'
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter(
[
  {
    path: '/',
    element: <h1>Inicio</h1>
  },
  {
    path: '/nosotros',
    element: <h1>Nosotros</h1> 
  }
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
