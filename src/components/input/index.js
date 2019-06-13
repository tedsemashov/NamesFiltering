import { connect } from "react-redux";
import {setVisibilityFilter} from "../../actions";
import {getVisibilityFilter} from '../../selectors';
import FilterInput from '../input/filter-input';

const mapStateToProps = (state) => {
   return {
      inputValue: getVisibilityFilter(state),
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter)),
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterInput)