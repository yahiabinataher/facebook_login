
import { RouterProvider } from 'react-router-dom'
import router from '../router/router'
import "./App.scss"
import { ToastContainer } from 'react-toastify'

function App() {


  return (
    <>
    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
    <RouterProvider router={router}/>
    </>
  )
}

export default App
