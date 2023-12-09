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
import Contacts from './Contacts';
import GuideDetails from './GuideDetails';
import DashBoard from './DashBoard';
import MyProfile from './MyProfile';
import Mybookings from './Mybookings';
import AdminProfile from './AdminProfile';
import AddPackage from './AddPackage';
import ErrorPage from './ErrorPage';
import PrivateRoute from './PrivateRoute';
import ManageUsers from './ManageUsers';
import Blogs from './Blogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Basic></Basic>,
    errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path: "/contactUs",
        element: <Contacts></Contacts>
      },
      {
        path: "/guideDetails/:id",
        element: <PrivateRoute><GuideDetails></GuideDetails></PrivateRoute>
      },
      {
        path: "/dashboard",
      element: <DashBoard></DashBoard>,
      },
      {
        path: "/myProfile",
        element: <MyProfile></MyProfile>
      },
      {
        path: "/myBooking",
        element: <Mybookings></Mybookings>
      },
      {
        path: "/adminProfile",
        element: <AdminProfile></AdminProfile>
      },
      {
        path: "/addPackage",
        element: <AddPackage></AddPackage>
      },
      {
        path: "/manageUsers",
        element: <ManageUsers></ManageUsers>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      }

    

    
     
    ]
  }
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
