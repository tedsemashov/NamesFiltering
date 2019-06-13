import { connect } from "react-redux";
import {setInputValue} from "../../actions";
import {getVisibilityFilter} from '../../selectors';
import FilterInput from '../input/filter-input';

const mapStateToProps = (state) => {
   return {
      inputValue: getVisibilityFilter(state),
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      setInputValue: (filter) => dispatch(setInputValue(filter)),
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterInput)