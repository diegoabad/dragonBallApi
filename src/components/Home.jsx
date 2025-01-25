import { useEffect, useState } from 'react';
import Card from './Card';
import characterService from '../services/character';
import Form from './Form';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modo, setModo] = useState('crear');
  const [form, setForm] = useState({
    id: '',
    name: '',
    ki: '',
    image: '',
  });

  const eliminarPersonaje = (id) => {
    const characters = data.filter((character) => {
      return character.id !== id;
    });
    setData(characters);
  };

  const crearPersonaje = (e, personaje) => {
    e.preventDefault();
    setData([{ ...personaje, id: uuidv4() }, ...data]);
  };

  const editarPersonaje = (e, personaje) => {
    e.preventDefault();
    const personajesCambiados = data.map((character) => {
      if (character.id === personaje.id) {
        return personaje;
      }
      return character;
    });
    setData(personajesCambiados);
    setModo('crear');
  };

  const elegirPersonaje = (id) => {
    const personaje = data.find((character) => character.id === id);
    setForm(personaje);
    setModo('editar');
  };

  useEffect(() => {
    try {
      setLoading(true);
      characterService.getCharacters().then((characters) => {
        setData(characters);
        setLoading(false);
      });
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  //   const llamarApiAxios = async () => {
  //     const response = axios.get('https://dragonball-api.com/api/characters');
  //     console.log(response);
  //   };

  //   const llamarApiPromise = () => {
  //     fetch('https://dragonball-api.com/api/characters')
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   };

  return (
    <div>
      <h1>HOME DRAGON BALL</h1>
      <Form
        submit={modo === 'crear' ? crearPersonaje : editarPersonaje}
        form={form}
        setForm={setForm}
        modo={modo}
      />
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      <div style={{ flexWrap: 'wrap', display: 'flex' }}>
        {data &&
          data.map((personaje) => (
            <Card
              key={personaje.id}
              personaje={personaje}
              eliminar={eliminarPersonaje}
              editar={elegirPersonaje}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
