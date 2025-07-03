import React, { useState } from "react";

function Solicitudes() {
  const [tipo, setTipo] = useState("Permiso");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tipo: ${tipo}\nDescripción: ${descripcion}`);
  };

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