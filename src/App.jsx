import { useEffect, useState } from 'react';
import TarjetaPersonaje from './components/TarjetaPersonaje';

export default function App() {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {

    async function cargarPersonajes() {
      try {
        const respuesta = await fetch('https://rickandmortyapi.com/api/character');
        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar los personajes');
        }
        const datos = await respuesta.json();
        // TODO 1: guardar datos.results con setPersonajes.
        setPersonajes(datos.results);

      } catch (error) {
        console.error('Error al consultar la API:', error);
        alert('No se pudieron cargar los personajes. Revisá la conexión y recargá la página.');
      }
    }

    cargarPersonajes();
  }, []);

  // filter devuelve un nuevo array con los personajes que cumplen la condición.
  // TODO 4: reemplazar personajes por personajes.filter(...).
  // Usar name, toLowerCase e includes para comparar con busqueda.

  // case sensitive . lower case (minuscula) upper case (mayuscula)
  const personajesFiltrados = personajes.filter(
    (personaje) => personaje.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main className="contenedor">
      <header>
        <p className="etiqueta">FRONTEND II · REACT + API</p>
        <h1>Explorador de personajes</h1>
        <p>Buscá personajes de Rick and Morty por su nombre.</p>
      </header>

      <section className="filtros" aria-label="Buscador">
        <label>
          Buscar por nombre
          <input
            type="search"
            placeholder="Por ejemplo: Rick"
            value={busqueda}
            onChange={(evento) => { setBusqueda(evento.target.value)}}
          />
        </label>
      </section>

      <p aria-live="polite">{personajesFiltrados.length} de {personajes.length} personajes cargados</p>

      {personajes.length > 0 && personajesFiltrados.length === 0 && (
        <p className="mensaje">No se encontraron resultados.</p>
      )}

      <section className="grilla" aria-label="Personajes">
        {personajesFiltrados.map( (personaje) => (<TarjetaPersonaje key={personaje.id} personaje={personaje} />))}
      </section>

      <footer>
        El buscador filtra los primeros 20 personajes descargados, no toda la API.
        <a href="https://rickandmortyapi.com/documentation">Documentación de la API</a>
      </footer>
    </main>
  );
}
