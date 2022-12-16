// Fichero src/components/App.js
import '../styles/App.scss';
import { useEffect, useState } from 'react';
import Filter from './Filter';
import getDataFromAPI from './services/Api';
import Header from './Header';
import CharacterList from './CharacterList';
import { Route, Routes } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';

// import FilterSpecies from './FilterSpecies';

function App() {
  const [data, setData] = useState([]);
  const [filterSpecies, setFilterSpecies] = useState('Todos');
  const [filterName, setFilterName] = useState('');
  const [filterGender, setFilterGender] = useState('Todos');

  useEffect(() => {
    getDataFromAPI().then((cleanData) => {
      setData(cleanData);
    });
  }, []);
  const handleOnSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleFilterSpecie = (value) => {
    setFilterSpecies(value);
  };
  const handleFilterName = (value) => {
    setFilterName(value);
  };
  const handleFilterGender = (value) => {
    setFilterGender(value);
  };
  

  const filterCharacter = data
    .filter(
      (character) =>
        character.species === filterSpecies || filterSpecies === 'Todos'
    )

    .filter(
      (character) =>
        character.name.toLowerCase().includes(filterName.toLowerCase()) ||
        filterName === ''
    ) 
    .filter(
      (character) =>
        character.gender === filterGender || filterGender === 'Todos'
    )
    

  const findCharacter = (id) => {
    return data.find((character) => character.id === parseInt(id));
  
  };

  return (
    <div>
      <Header></Header>
      <main>
        <Routes>
          <Route
            path="/" element={
              <>
                <Filter
                  handleFilterSpecie={handleFilterSpecie}
                  handleFilterName={handleFilterName}
                  handleOnSubmit={handleOnSubmit}
                  filterName={filterName}
                  filterSpecies={filterSpecies}
                  handleFilterGender={handleFilterGender}
                  filterGender={filterGender}
              
                ></Filter>
                <CharacterList
                  filterCharacter={filterCharacter}
                  filterName={filterName}
                >
                </CharacterList>
              </>
            }
          ></Route>
          <Route
            path="/user/:id"
            element={<CharacterDetail
               findCharacter={findCharacter} 
               filterCharacter={filterCharacter} 
               handleOnSubmit={handleOnSubmit}/>}
          ></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
