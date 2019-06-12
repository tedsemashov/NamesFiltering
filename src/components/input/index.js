import { connect } from "react-redux";
import {setVisibilityFilter} from "../../actions";
import {getFilteredNames} from '../../selectors';
import FilterInput from '../input/filter-input';

const mapStateToProps = (state) => {
   return {
      filteredNames: getFilteredNames(state)
   }
};

const mapDispatchToProps = (dispatch) => {
   debugger;
   return {
      setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter)),
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterInput)