import { useState } from 'react';

const Form = ({ submit, form, setForm, modo }) => {
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Form Creacion Personaje</h2>
      <form
        onSubmit={(e) => {
          setForm({ name: '', ki: '', image: '' });
          submit(e, form);
        }}>
        <input
          type="text"
          placeholder="Nombre"
          onChange={handleChange}
          name="name"
          value={form.name}
        />
        <input
          type="text"
          placeholder="Ki"
          onChange={handleChange}
          name="ki"
          value={form.ki}
        />
        <input
          type="text"
          placeholder="Imagen"
          onChange={handleChange}
          name="image"
          value={form.image}
        />
        <button>{modo === 'crear' ? 'Crear' : 'Editar'}</button>
      </form>
    </div>
  );
};

export default Form;
