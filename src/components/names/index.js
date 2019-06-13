import { connect } from "react-redux";
import {getNamesData} from "../../actions";
import {getNames, getFilteredNames} from '../../selectors';
import Names from './Names';

const mapStateToProps = (state) => {
   return {
      names: getNames(state),
      filteredNames: getFilteredNames(state)
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      getNamesData: () => dispatch(getNamesData())
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Names)