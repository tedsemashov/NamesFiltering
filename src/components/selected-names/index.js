import { connect } from "react-redux";
import {removeSelectedName} from "../../actions";
import {getSelectedNames} from '../../selectors';
import SelectedNames from './SelectedNames';

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