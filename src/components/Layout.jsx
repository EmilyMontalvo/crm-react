import React from 'react'
import {Outlet, Link, useLocation} from 'react-router-dom'

// El outlet permite que el contenido que le pases algo se renderice en todos los componentes
const Layout = () => {
    const location = useLocation()


  return (
    <div>
      <div className='md:flex md:min-h-screen'> 
        <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
            <h2 className='text-xl font-black text-center text-white '>CRM CLIENTES</h2>
            <nav className='mt-10'>
                <Link to="/" className={`${location.pathname === '/'?'text-blue-300':'text-white'} block mt-2 hover:text-blue-300 text-white uppercase`}>Clients</Link>
                <Link to="/clients/new" className={`${location.pathname === '/clients/new'?'text-blue-300':'text-white'} block mt-2 hover:text-blue-300 text-white uppercase`}>New Client</Link>
                
            </nav>
        </aside>
        <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'> 
        <Outlet/>
        </main>
      </div>
       
    </div>
  )
}

export default Layout
