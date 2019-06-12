import { connect } from "react-redux";
import {getNamesData} from "../../actions";
import {getNames} from '../../selectors';
import Names from './Names';

const mapStateToProps = (state) => {
   return {
      names: getNames(state)
   }
};

const mapDispatchToProps = (dispatch) => {
   debugger;
   return {
      getNamesData: () => dispatch(getNamesData())
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Names)