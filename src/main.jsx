import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Basic from './Basic';
import About from './OtherRoutes/About';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Basic></Basic>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/aboutUs",
        element: <About></About>
      }
    
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-lg mx-auto'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
