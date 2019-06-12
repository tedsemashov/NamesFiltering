import { createSelector } from 'reselect';

export const getNames = (state) => state.names;
export const getVisibilityFilter = (state) => state.visibilityFilter;

//RESELECTOR - library, Memoization - process
export const getFilteredNames = createSelector([getNames, getVisibilityFilter],
     (names, filter) =>
     {
        switch (filter) {
           default:
              return names.filter((obj) => obj.name.toLowerCase().search(filter.toLowerCase()) !== -1);
        }
     });


