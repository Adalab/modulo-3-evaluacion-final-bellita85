const FilterSpecies = (props) => {
    const handleSearch =  (ev) => {
      props.handleFilterSpecie(ev.target.value);
    
    };
        return (
          <form onSubmit={props.handleOnSubmit}>  
          <label> Busqueda por Especie </label>
           <select className='select'
           name='house'
           id='species'
            onChange={handleSearch}
            >
              <option value="Todos">Todos</option>
              <option value="Human">Humanos</option>
              <option value="Alien">Aliens</option>
             </select> 
             </form>
        );
      };
      export default FilterSpecies;