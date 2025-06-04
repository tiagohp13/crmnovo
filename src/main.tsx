import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* raiz “/” mostra directamente o Dashboard */}
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
