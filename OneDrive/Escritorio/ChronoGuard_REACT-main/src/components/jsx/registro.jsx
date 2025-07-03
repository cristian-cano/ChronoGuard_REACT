import React, { useState } from 'react';
import axios from 'axios';
import '../components/css/registro.css'; 
import logoCHG from'../components/img/logoCHGcircul.png'
// Assuming you have a CSS file for styling



function Registro() {
  const [nombre, setNombre] = useState("");
  const [apellido, setCelular] = useState("0");
  const [edad, setCorreo] = useState("");
  const [ide, setIde] = useState("0");

  const añadir = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/Gestion_de_usuarios', {
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      anos: ide
    })
    .then(() => {
      alert('¡Empleado registrado exitosamente!');
    });
  };

  return (
    
    <>
        <div className="datos">
            
            <img src={logoCHG} /><br/>
            <h2>Registro de Empleados</h2>
            
            
            <form onSubmit={añadir}>
            
            <label>
                <input onChange={(event) => setNombre(event.target.value)} type="text" placeholder='Nombre'/>
            </label>
            <label>
                <input onChange={(event) => setCorreo(event.target.value)} type="email" placeholder='Correo'/>
            </label>
            <label>
                <input onChange={(event) => setCelular(event.target.value)} type="number" placeholder='N° Celular' />
            </label>
            <label>
                <input onChange={(event) => setIde(event.target.value)} type="number"  placeholder='Identificacion'/>
            </label>
            <button className='agregar' type="submit">Registrar</button>
            <br />
            </form>
        </div>
   </>
  );
}

export default Registro;    