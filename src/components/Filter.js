import FilterSpecies from './FilterSpecies';
import FilterName from './FilterName';
const Filter = (props) => {

    return (
      <form>
        <FilterSpecies handleFilterSpecie={props.handleFilterSpecie}></FilterSpecies>
        <FilterName handleFilterName={props.handleFilterName}></FilterName>
      </form>
    );
  };
  
  export default Filter;