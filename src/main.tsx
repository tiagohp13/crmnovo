// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Todo o “/” e sub‐rotas serão geridos dentro de Dashboard.tsx */}
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
