import { createSlice } from '@reduxjs/toolkit';

export const positionsSlice = createSlice({
    name: 'position',
    initialState: [],
    reducers: {
        addPositions: (state, action) => action.payload,
    }
});

export const {addPositions} = positionsSlice.actions;
export const positionReducer = positionsSlice.reducer;

export const selectVisiblePositions = (state, filters = []) => {
   if(filters.length === 0) return state.positions;
   return state.positions.filter(pos => {
      const posFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);
      return filters.every(filter => posFilters.includes(filter))
   })
}