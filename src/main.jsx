import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ItemList from './Pages/BackOffice/Items/ItemList.jsx';
import RequisitionBoard from './Pages/BackOffice/Requisition/Board/RequisitionBoard.jsx';
import RequisitionList from './Pages/BackOffice/Requisition/List/RequisitionList.jsx';
import ReqSheet from './Pages/Sheets/Requisition/ReqSheets.jsx';
import { AlertProvider } from './Context/AlertContext.jsx';
import ItemSheet from './Pages/Sheets/Item/ItemSheet.jsx';

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
    path: "/list/:listName",
    element: <RequisitionList />
  },
  {
    path: "/item",
    element: <ItemList />
  },
  {
    path: "/addItem",
    element: <ItemSheet />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AlertProvider>
      <RouterProvider router={router} />
    </AlertProvider>
  </StrictMode>,
)
