function CharacterCard(props) {
    return (
      <li key={props.user.id} className='list'>
           <img
          className="card__img"
          src={props.user.image}
          alt={`Foto de ${props.user.name}`}
          title={`Foto de ${props.user.name}`}
        />
          <h3>
            {props.user.name} 
          </h3>
          <h4> {props.user.species} </h4>
          <h4> {props.user.status} </h4>
          <p>Su identificador especial es {props.user.id}</p>
          
      </li>
    );
  }
  export default CharacterCard;