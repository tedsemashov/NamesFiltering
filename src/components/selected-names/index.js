import { connect } from "react-redux";
import {removeSelectedName} from "../../actions";
import {getSelectedNames} from '../../selectors';
import SelectedNames from '../selected-names/selected-names';

const mapStateToProps = (state) => {
   return {
      selectedNames: getSelectedNames(state)
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      removeSelectedName: (id) => dispatch(removeSelectedName(id))
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedNames)