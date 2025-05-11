import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router'
import './index.css'
import { searchAction, searchLoader, sendAction } from './App.jsx'
import App from './App.jsx'
import ErrorPage from './components/ErrorPage.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement :  <ErrorPage />,
    loader: searchLoader,
    action: searchAction
  },
  {
    path: "/search/:fileId",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: searchLoader,
    action: sendAction
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
