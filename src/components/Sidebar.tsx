// src/components/Sidebar.tsx
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 240,
        background: '#ffffff',
        borderRight: '1px solid #e5e5e5',
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ padding: '12px 24px' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
              Dashboard
            </Link>
          </li>
          <li style={{ padding: '12px 24px' }}>
            <Link to="/produtos" style={{ textDecoration: 'none', color: '#333' }}>
              Produtos
            </Link>
          </li>
          <li style={{ padding: '12px 24px' }}>
            <Link to="/categorias" style={{ textDecoration: 'none', color: '#333' }}>
              Categorias
            </Link>
          </li>
          <li style={{ padding: '12px 24px' }}>
            <Link to="/clientes" style={{ textDecoration: 'none', color: '#333' }}>
              Clientes
            </Link>
          </li>
          <li style={{ padding: '12px 24px' }}>
            <Link to="/fornecedores" style={{ textDecoration: 'none', color: '#333' }}>
              Fornecedores
            </Link>
          </li>
          <li style={{ padding: '12px 24px' }}>
            <Link to="/encomendas" style={{ textDecoration: 'none', color: '#333' }}>
              Encomendas
            </Link>
          </li>
          <li style={{ padding: '12px 24px' }}>
            <Link to="/compras" style={{ textDecoration: 'none', color: '#333' }}>
              Compras
            </Link>
          </li>
          <li style={{ padding: '12px 24px' }}>
            <Link to="/vendas" style={{ textDecoration: 'none', color: '#333' }}>
              Vendas
            </Link>
          </li>
          <li style={{ padding: '12px 24px' }}>
            <Link to="/estatisticas" style={{ textDecoration: 'none', color: '#333' }}>
              Estatísticas
            </Link>
          </li>
          <li style={{ padding: '12px 24px' }}>
            <Link to="/configuracoes" style={{ textDecoration: 'none', color: '#333' }}>
              Configurações
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
