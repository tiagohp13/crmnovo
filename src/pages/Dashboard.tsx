// src/pages/Dashboard.tsx
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f9f9f9' }}>
      {/* O Menu Lateral */}
      <Sidebar />

      {/* Área principal de conteúdo */}
      <main style={{ flex: 1, padding: 24 }}>
        <Routes>
          {/* Se for a raiz “/”, vamos redirecionar para /clientes (ou para onde quiseres começar) */}
          <Route path="/" element={<Navigate to="/clientes" replace />} />

          {/* Estas rotas ainda não têm páginas definidas; mais à frente criamos cada página.
              Por agora, cada rota mostra apenas um texto simples indicando que ainda está vazia. */}
          <Route
            path="/clientes"
            element={<h2 style={{ color: '#555' }}>📋 Página de Clientes (sem dados ainda)</h2>}
          />
          <Route
            path="/produtos"
            element={<h2 style={{ color: '#555' }}>📦 Página de Produtos (sem dados ainda)</h2>}
          />
          <Route
            path="/categorias"
            element={<h2 style={{ color: '#555' }}>🏷️ Página de Categorias (sem dados ainda)</h2>}
          />
          <Route
            path="/fornecedores"
            element={<h2 style={{ color: '#555' }}>🚚 Página de Fornecedores (sem dados ainda)</h2>}
          />
          <Route
            path="/encomendas"
            element={<h2 style={{ color: '#555' }}>📝 Página de Encomendas (sem dados ainda)</h2>}
          />
          <Route
            path="/compras"
            element={<h2 style={{ color: '#555' }}>🛒 Página de Compras (sem dados ainda)</h2>}
          />
          <Route
            path="/vendas"
            element={<h2 style={{ color: '#555' }}>💰 Página de Vendas (sem dados ainda)</h2>}
          />
          <Route
            path="/estatisticas"
            element={<h2 style={{ color: '#555' }}>📊 Página de Estatísticas (sem dados ainda)</h2>}
          />
          <Route
            path="/configuracoes"
            element={<h2 style={{ color: '#555' }}>⚙️ Página de Configurações (sem dados ainda)</h2>}
          />

          {/* Qualquer rota inválida volta para /clientes */}
          <Route path="*" element={<Navigate to="/clientes" replace />} />
        </Routes>
      </main>
    </div>
  )
}
