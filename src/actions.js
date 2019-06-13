import *as constants from './constants';

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
      type: constants.SET_NAMES_DATA,
      names
   };
};

export const setInputValue = (value) => {
   return {
      type: constants.SET_INPUT_VALUE,
      value
   }
};

export const setSelectedName = (id) => {
   return {
      type: constants.SET_SELECTED_NAME,
      id
   }
};

export const removeSelectedName = (id) => {
   return {
      type: constants.REMOVE_SELECTED_NAME,
      id
   }
};

