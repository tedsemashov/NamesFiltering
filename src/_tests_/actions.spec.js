import {setNamesData, setInputValue, setSelectedName, removeSelectedName} from "../actions";
import *as constants from '../constants';

describe ('names actions', () => {
   it('should set names data', () => {
      const names = {names: {name: 'Ted'}};
      const expectedAction = {
         type: constants.SET_NAMES_DATA,
         names: {names: {name: 'Ted'}}
      };
      expect(setNamesData(names)).toEqual(expectedAction);
   });

   it('should set input value', () => {
      const value = 'ted';
      const expectedAction = {
         type: constants.SET_INPUT_VALUE,
         value: 'ted'
      };
      expect(setInputValue(value)).toEqual(expectedAction);
   });

   it('should set selected name', () => {
      const id = 5;
      const expectedAction = {
         type: constants.SET_SELECTED_NAME,
         id: 5
      };
      expect(setSelectedName(id)).toEqual(expectedAction);
   });

   it('should remove selected name', () => {
      const id = 2;
      const expectedAction = {
         type: constants.REMOVE_SELECTED_NAME,
         id: 2
      };
      expect(removeSelectedName(id)).toEqual(expectedAction);
   });

});
