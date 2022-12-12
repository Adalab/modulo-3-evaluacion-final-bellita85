const FilterName = (props) => {
    const handleSearchName =  (ev) => {
      props.handleFilterName(ev.target.value);
    
    };
      return (
          <input
              className="header__search"
              autoComplete="off"
              type="search"
              name="search"
              placeholder="Filtrar por Nombre"
              onInput={handleSearchName}
              // value={props.FilterName}
            />
      );
    };
    
    export default FilterName;