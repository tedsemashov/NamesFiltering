import { createSelector } from 'reselect';

export const getNames = (state) => state.names;
export const getVisibilityFilter = (state) => state.inputValue;
export const getSelectedNamesIDs = (state) => state.selectedNamesIDs;

//RESELECTOR - library, Memoization - process
export const getFilteredNames = createSelector([getNames, getVisibilityFilter, getSelectedNamesIDs],
     (names, inputValue, selectedNamesIDs) =>
     {
     const filteredNamesByInput = names.filter((obj) => obj.name.toLowerCase().search(inputValue.toLowerCase()) !== -1);
     return filteredNamesByInput.filter(({id}) => !selectedNamesIDs.includes(id));
     });

export const getSelectedNames = createSelector([getNames, getSelectedNamesIDs],
     (names, ids) =>
     {
        switch (ids) {
           default:
              return names.filter(({id}) => ids.includes(id));
        }
     });



