import React, { Component, useEffect, useState } from 'react'


export const Clock = () => {
const [State, setState] = useState({
    // Se genera una fecha como estado inicial del componente
    fecha: new Date(),
    edad: 28,
    nombre: "Christian",
    apellidos: "Quirama Hernández"
 });

 useEffect(() => {
     const timerID = setInterval (
         () => tick(), 1000
      )    
  return () => clearInterval(timerID)
 }, []);

function tick(){
     setState((prevState) => {
        let edad = prevState.edad +1;
        return {
           ...prevState,
           fecha: new Date(),
           edad
        }
     });
  }
return (
    <div>
    <h2>
    Hora Actual:
    {State.fecha.toLocaleTimeString()}
    </h2>
    <h3>{State.nombre} {State.apellidos}</h3>
    <h1>Edad: {State.edad}</h1>
    </div>
 )
}