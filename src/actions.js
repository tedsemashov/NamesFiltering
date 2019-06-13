import { SET_NAMES_DATA, SET_INPUT_VALUE, SET_SELECTED_NAME, REMOVE_SELECTED_NAME} from './constants';

export const getNamesData = () => {
   return (dispatch) => {
      fetch('/names')
           .then((res) => res.json())
           .then(({names}) => {
              dispatch(setNamesData(names));
           })
   };
};

export const setNamesData = (names) => {
   return {
      type: SET_NAMES_DATA,
      names
   };
};

export const setInputValue = (value) => {
   return {
      type: SET_INPUT_VALUE,
      value
   }
};

export const setSelectedName = (id) => {
   return {
      type: SET_SELECTED_NAME,
      id
   }
};

export const removeSelectedName = (id) => {
   return {
      type: REMOVE_SELECTED_NAME,
      id
   }
};

