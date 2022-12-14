import { Link } from "react-router-dom";

function CharacterCard(props) {
  
    return (
      <Link to={`/user/${props.filterCharacter.id}`}>
      <li className='list'>
           <img
          className="card__img"
          src={props.filterCharacter.image}
          alt={`Foto de ${props.filterCharacter.name}`}
          title={`Foto de ${props.filterCharacter.name}`}
        />
          <h3>
            {props.filterCharacter.name} 
          </h3>
          <h4> {props.filterCharacter.species} </h4>
          <h4> {props.filterCharacter.status} </h4>
          <p>Su identificador especial es {props.filterCharacter.id}</p>
          
      </li>
      </Link>
    );
  }
  export default CharacterCard;