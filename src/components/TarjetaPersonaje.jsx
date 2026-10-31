export default function TarjetaPersonaje({ personaje }) {
  return (
    <article className="tarjeta">
      <img src={personaje.image} alt={personaje.name} />
      <div className="contenido-tarjeta">
        <h2>{personaje.name}</h2>
        <p>Especie: {personaje.species}</p>
        <p>Estado: {personaje.status}</p>
        <p>Genero: {personaje.gender}</p>
        <p>Origen: {personaje.origin.name}</p>
        <p>Ubicaciòn: {personaje.location.name}</p>
      </div>
    </article>
  );
}
