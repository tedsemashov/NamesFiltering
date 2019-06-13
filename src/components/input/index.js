import { connect } from "react-redux";
import {setInputValue} from "../../actions";
import {getInputValue} from '../../selectors';
import InputFilter from './InputFilter';

const mapStateToProps = (state) => {
   return {
      inputValue: getInputValue(state),
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      setInputValue: (filter) => dispatch(setInputValue(filter)),
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(InputFilter)