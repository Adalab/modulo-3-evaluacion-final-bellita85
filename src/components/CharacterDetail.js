import { useParams } from "react-router-dom";
const CharacterDetail = (props) => {
    const params = useParams();
    console.log(params.id)
const charactersFound = props.findCharacter(params.id);
console.log (charactersFound);
    return  (
        <div className="div-detail">
            <p>Volver</p>
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
            {charactersFound.name} 
          </h3>
          <h4> {charactersFound.species} </h4>
          <h4> {charactersFound.status} </h4>
          <p>Su identificador especial es {charactersFound.id}</p>
        </div>

            </article>
        </div>
    )

};
export default CharacterDetail;