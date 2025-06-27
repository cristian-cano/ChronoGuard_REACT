import React, { useState } from 'react'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el inicio de sesión
    alert(`Email: ${email}\nPassword: ********`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Inicio De Sesión</h2>

        <label className='corro'>Correo electrónico</label>
        
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="ejemplo@correo.com"/>

        <label className='contra' style={{ marginBottom: '0.5rem', color: '#555' }}>Contraseña</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
          style={{
            padding: '0.5rem',
            marginBottom: '1.5rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
          placeholder="********"
        />
        <button
          type="submit"
          style={{
            background: 'linear-gradient(90deg, #74ebd5 0%, #ACB6E5 100%)',
            color: '#fff',
            padding: '0.75rem',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background 0.3s'
          }}
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  )
}

export default Login