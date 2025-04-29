import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'

import Login from './pages/auth/auth';
import Home from './pages/home/home';
import Detail from './pages/detail/detail';



export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<h1>Não</h1>} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/detail/:idDetail' element={<Detail />} />
    </>
  )

)

const App = () => {
  return (
    <div className="w-screen h-screen bg-blue-400 flex justify-center p-6">
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
