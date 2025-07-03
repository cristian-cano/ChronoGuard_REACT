import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/css/empleados/ChronoGuardUsuarios.css'
import Solicitudes from './components/jsx/Empleados/solicitudes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Solicitudes />
  </StrictMode>,
)
