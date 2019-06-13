import { connect } from "react-redux";
import {getNamesData, setSelectedName} from "../../actions";
import {getFilteredNames} from '../../selectors';
import Names from './Names';

const mapStateToProps = (state) => {
   return {
      filteredNames: getFilteredNames(state)
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      getNamesData: () => dispatch(getNamesData()),
      setSelectedName: (id) => dispatch(setSelectedName(id))
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Names)