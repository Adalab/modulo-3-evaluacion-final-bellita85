import FilterSpecies from './FilterSpecies';
import FilterName from './FilterName';
const Filter = (props) => {

    return (
      <>
        <FilterSpecies handleFilterSpecie={props.handleFilterSpecie} filterSpecies={props.filterSpecies} handleOnSubmit={props.handleOnSubmit}></FilterSpecies>
        <FilterName handleFilterName={props.handleFilterName}  filterName={props.filterName} handleOnSubmit={props.handleOnSubmit}></FilterName>
      </>
    );
  };
  
  export default Filter;