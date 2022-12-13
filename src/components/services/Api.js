const getDataFromAPI = () => {
    return fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        const cleanData = data.results.map((user) => {
          return {
            name: user.name,
            status: user.status,
            id: crypto.randomUUID(),
            species: user.species,
            image: user.image,
            origin: user.origin.name,
            episode: user.episode,
            
          };
        });
        return cleanData;
        
      });
     
  };
  export default getDataFromAPI;