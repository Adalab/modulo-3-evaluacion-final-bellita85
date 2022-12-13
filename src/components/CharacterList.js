
import CharacterCard from './CharacterCard';
import Error from './Error';


const CharacterList = ({filterCharacter, filterName}) => {
    const paintCharacter = () => {
                const Element = filterCharacter.map((character) => {
                 return (<CharacterCard key={character.id} filterCharacter={character}/>)})
      return ( <div className='div-list'> 
     <ul className='ul'> {Element}</ul>
     </div>)
    }; 
if (filterCharacter.length !== 0) {return paintCharacter() } else {return (<div><Error></Error></div>)} 
 
};

export default CharacterList;
