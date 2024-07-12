import React from 'react'
import Dashboard from './pages/dashboard'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Routers from './router/routers';


const App = () => {
  return (
    <div>
      <ToastContainer theme="colored" position="top-center" />
      <Routers />
    </div>
  )
}

export default App