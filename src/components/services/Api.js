const getDataFromAPI = () => {
    return fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        const cleanData = data.results.map((user) => {
          return {
            name: user.name,
            status: user.status,
            id: user.id,
            species: user.species,
            image: user.image,
            origin: user.origin.name,
            episode: user.episode,
            gender: user.gender,
        
            
          };
        });
        return cleanData.sort(function (a,b) {
          if (a.name > b.name){
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
        
      });
     
  };
  export default getDataFromAPI;