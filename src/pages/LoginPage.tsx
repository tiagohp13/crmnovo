import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert(`Login simulado:\nEmail: ${email}\nPassword: ${password}`)
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        /><br />

        <button type="submit">Entrar</button>
      </form>

      <p style={{ marginTop: 8 }}>
        Ainda não tens conta? <Link to="/register">Criar conta</Link>
      </p>
    </div>
  )
}
