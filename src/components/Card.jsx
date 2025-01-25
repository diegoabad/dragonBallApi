import React from 'react';

const Card = ({ personaje, eliminar, editar }) => {
  return (
    <div
      style={{
        border: '1px solid black',
        margin: '10px',
        padding: '10px',
        flex: '1 1 30%',
      }}>
      <h2>{personaje.name}</h2>
      <p>{personaje.ki}</p>
      <img
        style={{ maxWidth: '100px' }}
        src={personaje.image}
        alt={personaje.name}
      />
      <button
        onClick={() => {
          eliminar(personaje.id);
        }}>
        Eliminar
      </button>
      <button
        onClick={() => {
          editar(personaje.id);
        }}>
        Editar
      </button>
    </div>
  );
};

export default Card;
