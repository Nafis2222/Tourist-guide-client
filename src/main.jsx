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
import PackageDetails from './PackageDetails';
import AuthProvider from './AuthProvider';
import Login from './Login';
import Register from './Register';

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
      },
      {
        path: "/package/:details",
        element: <PackageDetails></PackageDetails>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }

    
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-lg mx-auto'>
      <AuthProvider>
      <RouterProvider router={router} />

      </AuthProvider>
    </div>
  </React.StrictMode>,
)
