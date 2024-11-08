import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ItemList from './pages/BackOffice/Item/ItemList.jsx';
import RequisitionBoard from './pages/BackOffice/Requisition/Board/RequisitionBoard.jsx';
import RequisitionList from './pages/BackOffice/Requisition/List/RequisitionList.jsx';
import ReqsSheet from './pages/Sheets/Requisition/ReqsSheet.jsx';
import { AlertProvider } from './Context/AlertContext.jsx';
import ItemSheet from './pages/Sheets/Item/ItemSheet.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ReqsSheet />
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
