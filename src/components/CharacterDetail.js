const CharacterDetail = (props) => {

    return  (
        <div className="div-detail">
            <p>Volver</p>
            <article>
<div><img
          className="card__img"
          src={props.user.image}
          alt={`Foto de ${props.user.name}`}
          title={`Foto de ${props.user.name}`}
        /></div>
        <div className="div-detail-2">
        <h3>
            {props.user.name} 
          </h3>
          <h4> {props.user.species} </h4>
          <h4> {props.user.status} </h4>
          <p>Su identificador especial es {props.user.id}</p>
        </div>

            </article>
        </div>
    )
};
export default CharacterDetail;