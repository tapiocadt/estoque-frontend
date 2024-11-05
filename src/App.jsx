import { useState } from 'react'
import ReqSheet from './pages/sheets/Requisition/ReqSheet'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReqSheet />
    </>
  )
}

export default App
