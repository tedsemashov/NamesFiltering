import { createSelector } from 'reselect';

export const getNames = (state) => state.names;
export const getVisibilityFilter = (state) => state.inputValue;
export const getSelectedNamesIDs = (state) => state.selectedNamesIDs;

//RESELECTOR - library, Memoization - process
export const getFilteredNames = createSelector([getNames, getVisibilityFilter],
     (names, inputValue) =>
     {
        switch (inputValue) {
           default:
              return names.filter((obj) => obj.name.toLowerCase().search(inputValue.toLowerCase()) !== -1);
        }
     });

export const getSelectedNames = createSelector([getNames, getSelectedNamesIDs],
     (names, ids) =>
     {
        switch (ids) {
           default:
              return names.filter(({id}) => ids.includes(id));
        }
     });



