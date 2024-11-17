import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import ListedBook from './Component/ListedBook/ListedBook.jsx';
import Pagetoread from './Component/Page to read/Pagetoread.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/listedbook',
        element:<ListedBook></ListedBook>
      },
      {
        path:'/pagetoread',
        element:<Pagetoread></Pagetoread>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
