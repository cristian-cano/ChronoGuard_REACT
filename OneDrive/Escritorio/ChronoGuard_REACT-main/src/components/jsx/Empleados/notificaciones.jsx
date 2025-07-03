import React from "react";

const notificaciones = [
  { fecha: "2024-12-05", asunto: "Turno modificado", estado: "Pendiente" },
  { fecha: "2024-12-12", asunto: "Permiso no aprobado", estado: "Leído" },
  { fecha: "2024-12-20", asunto: "Permiso aprobado", estado: "Leído" },
  { fecha: "2024-12-28", asunto: "Permiso no aprobado", estado: "Leído" },
];

function Notificaciones() {
  
  return (
    <section style={{ marginBottom: 32 }}>
      <h2>Notificaciones</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Asunto</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {notificaciones.map((n, idx) => (
            <tr key={idx}>
              <td>{n.fecha}</td>
              <td>{n.asunto}</td>
              <td>{n.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Notificaciones;