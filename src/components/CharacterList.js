import CharacterCard from './CharacterCard';
const CharacterList = ({user}) => {
    // console.log(user);
const Element = user.map((user) => {
    return <CharacterCard user={user}/>;
  });


  return (
    <div className='div-list'> 
      <ul className='ul'> {Element}</ul>
    </div>
  );
};

export default CharacterList;
