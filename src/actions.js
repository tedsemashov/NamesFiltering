import { SET_NAMES_DATA, SET_VISIBILITY_FILTER } from './constants';

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

export const setVisibilityFilter = (filter) => {
   return {
      type: SET_VISIBILITY_FILTER,
      filter
   }
};