import { Link, useParams } from "react-router-dom";
const CharacterDetail = (props) => {
    const params = useParams();
    console.log(params.id)
const charactersFound = props.findCharacter(params.id);
console.log (charactersFound.episode.length);
const characterLength =  charactersFound.episode.length
    return  (
        <div className="div-detail">
           <Link to="/" ><p>Volver</p></Link> 
            <article>
<div>
    <img
          className="card__img"
          src={charactersFound.image}
          alt={`Foto de ${charactersFound.name}`}
          title={`Foto de ${charactersFound.name}`}
        />
</div>
        <div className="div-detail-2">
        <h3>
            Nombre del personaje :
            {charactersFound.name} 
          </h3>
          <h4>Especie del personaje: {charactersFound.species} </h4>
          <h4>Estado del personaje: {charactersFound.status} </h4>
          <h4>Planeta de origen :{charactersFound.origin}</h4>
          <h4>Numero de episodios en los que aparece : {characterLength}</h4>
          <p>Su identificador especial es {charactersFound.id}</p>
        </div>

            </article>
        </div>
    )

};
export default CharacterDetail;