import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter, } from "react-router-dom";
import Layout from "./admin/Layout";
import Sign_up from "./admin/Component/Sign_up.jsx"
import './index.css';
import App from './App.jsx'
import Login from './admin/Component/Login.jsx';
import Profile from './admin/Component/Profile.jsx';


const routes =createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  },
  {
    path:'layout',
   element: <Layout/>,
  },
  {
    path:'sign-up',
   element: <Sign_up/>,
  },
  {
    path:'login',
   element: <Login/>,
  },
  {
    path:'profile/:id',
   element: <Profile/>,

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router ={routes}/>
  </StrictMode>,
)
