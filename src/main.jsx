import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ItemList from './pages/BackOffice/Item/ItemList.jsx';
import RequisitionList from './pages/BackOffice/Requisition/RequisitionList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/view",
    element: <RequisitionList />
  },
  {
    path: "/item",
    element: <ItemList />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
