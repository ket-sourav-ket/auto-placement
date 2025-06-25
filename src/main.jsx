import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router'
import './index.css'
import { searchAction, searchLoader, sendAction } from './App.jsx'
import App from './App.jsx'
import EmailBox from './components/EmailBox.jsx'
import RegForm from './components/RegForm.jsx'
import { driveAction } from './components/RegForm.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Login from './components/Login.jsx'
import { loginAction, registerAction , loader } from './components/Login.jsx'
import { reportAction, downloadAction } from './components/Report.jsx'
import { importAction } from './components/ExcelUpload.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement :  <ErrorPage />,
    loader: searchLoader,
    action: searchAction,
    children:[
      {
        path: "search/:fileId",
        element: <EmailBox />,
        errorElement: <ErrorPage />,
        loader: searchLoader,
        action: sendAction
        
      }
    ]
  },
  {
    path: "/import",
    action: importAction,
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/register",
    action: driveAction,
    element: <RegForm />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    loader: loader,
    action: loginAction,
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/registerAdmin",
    loader: loader,
    action: registerAction,
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/report",
    action: reportAction,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "download",
        element: <App />,
        errorElement: <ErrorPage />,
        action: downloadAction,
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
