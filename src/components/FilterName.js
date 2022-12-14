const FilterName = (props) => {
    const handleSearchName =  (ev) => {
      props.handleFilterName(ev.target.value);
   
    };
      return (
        <form className="form-detail-2" onSubmit={props.handleOnSubmit}>  
        <label className="input_filter"> Busqueda por Nombre </label>
        <input
        className="input_name"
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