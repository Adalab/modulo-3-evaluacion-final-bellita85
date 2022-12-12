const FilterSpecies = (props) => {
    const handleSearch =  (ev) => {
      props.handleFilterSpecie(ev.target.value);
    
    };
        return (
           <select className='select'
           name='house'
           id='species'
            onChange={handleSearch}
            >
              <option value="Todos">Todos</option>
              <option value="Human">Humanos</option>
              <option value="Alien">Aliens</option>
             </select> 
        );
      };
      export default FilterSpecies;