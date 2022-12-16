const FilterGender = (props) => {
    const handleSearchGender =  (ev) => {
      props.handleFilterGender(ev.target.value);
    
    };
        return (
          <form className="form-detail-2" onSubmit={props.handleOnSubmit}>  
          <label> Busqueda por Genero </label>
           <select className='select'
           name='gender'
           id='gender'
            onChange={handleSearchGender}
            >
              <option value="Todos">Todos</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="unknown">unknown</option>
             </select> 
             </form>
        );
      };
      export default FilterGender;