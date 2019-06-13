import rootReducer from '../reducer';
import * as constants from '../constants';

describe('root reducer', () => {

   it('should handle SET_INPUT_VALUE', () => {
      const state = '';
      const action = {
         type: constants.SET_INPUT_VALUE,
         value: 'Ted'
      };
      expect(rootReducer(state, action)).toEqual({inputValue: 'Ted'});
   });

});