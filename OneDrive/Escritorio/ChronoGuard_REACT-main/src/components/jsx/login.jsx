import React, { useState } from 'react';
import '/Users/Juan Esteban Londoño/OneDrive/Escritorio/ChronoGuard_REACT-main/src/components/css/login.css';

function Login({ show, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(show);

  if (!show) return null; // Si no debe mostrarse, no renderiza nada

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¿Deseas cancelar la operacion?');
    onClose(); // cerrar modal tras enviar
  };

  return (
    <div className="login-modal">


    <div 
      className="modal-overlay"
      onClick={onClose}     
    >
      <div
        className='cont'
        onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer click dentro del modal
        style={{
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundcolor: 'rgb(0, 0, 0)',
        display: 'flex',
        justifycontent: 'center',
        alignitems: 'center',
        zindex: '1000',
        
        }}
      >
        <form className='formulari' onSubmit={handleSubmit}>
          <h2 className='inic'>Inicio De Sesión</h2>

          
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
              style={{
              padding: '0.5rem',
              marginBottom: '1.5rem',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '1rem'
            }}
            placeholder="Correo Electrónico"
          />

          
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{
              padding: '0.5rem',
              marginBottom: '1.5rem',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '1rem'
            }}
            placeholder="Contraseña"
          />

          <button
            type="submit"
            style={{
              background: 'linear-gradient(90deg,rgb(116, 158, 235) 0%,rgb(172, 229, 229) 100%)',
              color: 'rgba(0, 0, 0, 0.86)',
              padding: '0.75rem',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              
              cursor: 'pointer',
              transition: 'background 0.3s'
            }}
          >
            Iniciar Sesión
          </button>

          <button onClick={() => setShowLogin(false)} style={{ marginTop: '10px' }}>
          Cerrar
        </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;