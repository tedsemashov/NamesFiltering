import *as constants from './constants';

const initialState = {
   names: [],
   visibilityFilter: ''
};

const rootReducer = (state = initialState, action) => {
   debugger;
   switch (action.type) {
      case constants.SET_NAMES_DATA:
         return {
            ...state,
            names: action.names
         };
      case constants.SET_VISIBILITY_FILTER:
         return {
            ...state,
            visibilityFilter: action.filter
         };
      default: return state;
   }
};

export default rootReducer;