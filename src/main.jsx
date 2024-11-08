import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ItemList from './pages/BackOffice/Item/ItemList.jsx';
import RequisitionBoard from './pages/BackOffice/Requisition/Board/RequisitionBoard.jsx';
import RequisitionList from './pages/BackOffice/Requisition/List/RequisitionList.jsx';
import ReqSheet from './pages/sheets/Requisition/ReqSheet.jsx';
import { AlertProvider } from './Context/AlertContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ReqSheet />
  },
  {
    path: "/view",
    element: <RequisitionBoard />
  },
  {
    path: "/item",
    element: <ItemList />
  },
  {
    path: "/list/:listName",
    element: <RequisitionList />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AlertProvider>
      <RouterProvider router={router} />
    </AlertProvider>
  </StrictMode>,
)
