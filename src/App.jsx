import React from 'react'
import Dashboard from './pages/dashboard'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
      <ToastContainer theme="colored" position="top-center" />
      <Dashboard />
    </div>
  )
}

export default App