import { createSelector } from 'reselect';

export const getNames = (state) => state.names;
export const getInputValue = (state) => state.inputValue;
export const getSelectedNamesIDs = (state) => state.selectedNamesIDs;

//RESELECTOR - library, Memoization - process (get only fragment of Redux state for our components)
export const getFilteredNames = createSelector([getNames, getInputValue, getSelectedNamesIDs],
     (names, inputValue, selectedNamesIDs) =>
     {
        const filteredNamesByInput = names.filter((obj) => obj.name.toLowerCase()
             .search(inputValue.toLowerCase()) !== -1);
        return filteredNamesByInput.filter(({id}) => !selectedNamesIDs.includes(id));
     });

export const getSelectedNames = createSelector([getNames, getSelectedNamesIDs],
     (names, ids) =>
     {
        return names.filter(({id}) => ids.includes(id));
     });



