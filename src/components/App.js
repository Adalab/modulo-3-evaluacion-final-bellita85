// Fichero src/components/App.js
import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Filter from './Filter';
import getDataFromAPI from './services/Api';
import Header from './Header';
import CharacterList from './CharacterList';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';


function App() {
  const [data, setData] = useState([]);
  const [filterSpecies, setFilterSpecies] = useState('Todos');
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    
    getDataFromAPI().then((cleanData) => {
      setData(cleanData);
     
    });
  }, []);
  const handleFilterSpecie = ( value) => {
    setFilterSpecies(value);
  };
  const handleFilterName = ( value) => {
    setFilterName(value);
  };
  const filterCharacter = data

.filter((character) => { return filterSpecies === 'Todos' ? true : character.species === filterSpecies;})
.filter((character) => character.name.toLowerCase().includes(filterName.toLowerCase()) );

const findCharacter= (id) => {
  return data.find((character)=>character.id === id);
}
  return (
    <div >
      <Header></Header>
      <main>
        <Routes>
          <Route path='/' element={ 
            <>
        <Filter 
        handleFilterSpecie={handleFilterSpecie}
         handleFilterName={handleFilterName}></Filter>
        <CharacterList user={filterCharacter}></CharacterList>
        </>
      }>

        </Route>
        <Route path="/user/:id" element={<CharacterDetail findCharacter={findCharacter}/>} ></Route>
      </Routes>

      </main>
       </div>
  );
}

export default App;
