import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ItemList from './sPages/BackOffice/Items/ItemList.jsx';
import RequisitionBoard from './sPages/BackOffice/Requisition/Board/RequisitionBoard.jsx';
import RequisitionList from './sPages/BackOffice/Requisition/List/RequisitionList.jsx';
import EqsSheet from './sPages/Heets/Equisition/EeqsSheets.jsx';
import { AlertProvider } from './Context/AlertContext.jsx';
import ItemSheet from './sPages/Heets/Item/ItemSheet.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <EqsSheet />
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
