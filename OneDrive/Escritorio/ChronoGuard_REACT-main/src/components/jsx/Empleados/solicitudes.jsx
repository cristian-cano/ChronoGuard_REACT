import React, { useState } from "react";
import logoUrl from '/public/LogoChronoguard (1) (1).png'
function Solicitudes() {
  const [tipo, setTipo] = useState("Permiso");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tipo: ${tipo}\nDescripción: ${descripcion}`);
  };

        <div className="contenedor-dashboard">
        <aside className="barra-lateral">
          <div className="logo">
            <img src={logoUrl} alt="Logo ChronoGuard" width={100} />
            <h2>ChronoGuard</h2>
          </div>
          <nav className="menu">
            <NavLink className="opcion" to="/notificaciones">Notificaciones</NavLink>
            <NavLink className="opcion" to="/solicitudes">Solicitudes</NavLink>
            <NavLink className="opcion" to="/registro-asistencia">Registro Asistencia</NavLink>
            <NavLink className="opcion" to="/consultar-horarios">Consultar Horarios</NavLink>
          </nav>
        </aside>
        <main className="contenido-principal">
          <h1 className="encabezado">Panel de Empleados</h1>
          <Routes>
            <Route path="/" element={<Navigate to="/notificaciones" replace />} />
            <Route path="/notificaciones" element={<Notificaciones />} />
            <Route path="/solicitudes" element={<Solicitudes />} />
            <Route path="/registro-asistencia" element={<RegistroAsistencia />} />
            <Route path="/consultar-horarios" element={<ConsultarHorarios />} />
          </Routes>
        </main>
      </div>

  return (
    <section style={{ marginBottom: 32 }}>
      <form onSubmit={handleSubmit}>
        <h2>Solicitudes</h2>
        <label>
          Tipo de Solicitud:
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="Permiso">Permiso</option>
            <option value="Vacaciones">Vacaciones</option>
            <option value="Cambio de Turno">Cambio de Turno</option>
          </select>
        </label>
        <label>
          Descripción:
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </label>
        <button type="submit">Enviar Solicitud</button>
      </form>
    </section>
  );
}

export default Solicitudes;