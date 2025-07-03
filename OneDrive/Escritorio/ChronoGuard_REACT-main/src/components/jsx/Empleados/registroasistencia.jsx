import React, { useState } from "react";

function RegistroAsistencia() {
  const [accion, setAccion] = useState("");

  const handleAccion = (tipo) => {
    setAccion(tipo);
    alert(`Acción realizada: ${tipo}`);
  };

  return (
    <section style={{ marginBottom: 32 }}>
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Registro de Asistencia</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <button type="button" onClick={() => handleAccion("Marcar Entrada")}>
            Marcar Entrada
          </button>
          <button type="button" onClick={() => handleAccion("Marcar Salida")}>
            Marcar Salida
          </button>
          <button type="button" onClick={() => handleAccion("Registrar")}>
            Registrar
          </button>
        </div>
        {accion && <p>Última acción: {accion}</p>}
      </form>
    </section>
  );
}

export default RegistroAsistencia;