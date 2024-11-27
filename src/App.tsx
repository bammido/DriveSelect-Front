import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalContextProvider } from "./context/globalContext";

function App() {
  
  return (
    <GlobalContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </GlobalContextProvider>
  )
}

export default App
