import { useState } from 'react'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert(`Registo simulado:\nEmail: ${email}\nPassword: ${password}`)
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Registo</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} /><br />
        <button type="submit">Registar</button>
      </form>
    </div>
  )
}