import *as constants from './constants';

const initialState = {
   names: [],
   inputValue: '',
   selectedNamesIDs: []
};

const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case constants.SET_NAMES_DATA:
         return {
            ...state,
            names: action.names
         };
      case constants.SET_INPUT_VALUE:
         return {
            ...state,
            inputValue: action.value
         };
      case constants.SET_SELECTED_NAME:
         return {
            ...state,
            selectedNamesIDs: state.selectedNamesIDs.concat(action.id)
         };
      case constants.REMOVE_SELECTED_NAME:
         return {
            ...state,
            selectedNamesIDs: state.selectedNamesIDs.filter((id) => action.id !== id)
         };
      default: return state;
   }
};

export default rootReducer;