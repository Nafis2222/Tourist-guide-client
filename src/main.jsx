import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Basic from './Basic';
import Banner from './Banner';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Basic></Basic>,
    children: [
      {
        path: "/community",
        element: <Banner></Banner>
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
