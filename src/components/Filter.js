import FilterSpecies from './FilterSpecies';
import FilterName from './FilterName';
import FilterGender from './FilterGender';
const Filter = (props) => {

    return (
      <>
        <FilterSpecies handleFilterSpecie={props.handleFilterSpecie} filterSpecies={props.filterSpecies} handleOnSubmit={props.handleOnSubmit}></FilterSpecies>
        <FilterName handleFilterName={props.handleFilterName}  filterName={props.filterName} handleOnSubmit={props.handleOnSubmit}></FilterName>
<FilterGender handleFilterGender={props.handleFilterGender}filterGender={props.filterGender}></FilterGender>
      </>
    );
  };
  
  export default Filter;