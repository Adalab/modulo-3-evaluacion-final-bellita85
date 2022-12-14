import { Link, useParams } from 'react-router-dom';
import Error from './Error';
const CharacterDetail = (props) => {
  const params = useParams();
  const charactersFound = props.findCharacter(params.id);

  const paintCharacter = () => {
    const characterLength = charactersFound.episode.length;
    return (
      <div className="div-detail">
        <Link to="/" className="nav">
          <p className="nav">Volver</p>
        </Link>
        <article className="article">
          <div className="div-detail-2">
            <img
              className="card__img"
              src={charactersFound.image}
              alt={`Foto de ${charactersFound.name}`}
              title={`Foto de ${charactersFound.name}`}
            />
          </div>
          <div className="div-detail-2">
            <h3>Nombre del personaje :{charactersFound.name}</h3>
            <h4>Especie del personaje: {charactersFound.species} </h4>
            <h4>Estado del personaje: {charactersFound.status} </h4>
            <h4>Planeta de origen :{charactersFound.origin}</h4>
            <h4>Numero de episodios en los que aparece : {characterLength}</h4>
          </div>
          <div>
            <form className="form-detail" onSubmit={props.handleOnSubmit}>
              <label>
                
                Si quieres puedes compartir esta URL con tu vecina
              </label>
              <input
                className="header__search"
                autoComplete="off"
                type="text"
                name="search"
                value={`beta.adalab.es/modulo-3-evaluacion-final-bellita85/#/user/${charactersFound.id}`}
                readOnly
              />
            </form>
          </div>
        </article>
      </div>
    );
  };
  if (charactersFound !== undefined) {
    return paintCharacter();
  } else {
    return (
      <div>
        <Error
          text="ERROR "
          text2="El servidor no contesta o la pagina buscada no existe"
          text3="Volver a la pagina inicial"
        ></Error>
      </div>
    );
  }
};
export default CharacterDetail;
