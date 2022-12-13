const FilterName = (props) => {
    const handleSearchName =  (ev) => {
      props.handleFilterName(ev.target.value);
   
    };
      return (
        <form onSubmit={props.handleOnSubmit}>  
        <label> Busqueda por Nombre </label>
        <input
        className="header__search"
        autoComplete="off"
        type="search"
        name="search"
        placeholder="Filtrar por Nombre"
        onInput={handleSearchName}
        value={props.filterName}
      /> 
      </form>
        
      );
    };
    
    export default FilterName;