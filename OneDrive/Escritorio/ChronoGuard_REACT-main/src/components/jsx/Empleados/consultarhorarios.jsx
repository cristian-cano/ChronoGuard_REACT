import React from "react";

function ConsultarHorarios() {
  return (
    <section>
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Consulta de Horarios</h2>
        <p>Próximamente podrás consultar tus horarios aquí.</p>
      </form>
    </section>
  );
}

export default ConsultarHorarios;