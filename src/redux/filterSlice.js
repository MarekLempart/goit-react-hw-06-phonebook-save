// filterSlice.js

// Importowanie funkcji `createSlice` z biblioteki Redux Toolkit.
import { createSlice } from '@reduxjs/toolkit';

// Tworzenie slice'a dla filtra za pomocą funkcji `createSlice`.
const filterSlice = createSlice({
  // Nazwa slice'a.
  name: 'filter',
  // Stan początkowy - pusty string.
  initialState: '',
  // Reducery dla slice'a, zawierający funkcję do ustawiania filtra.
  reducers: {
    // Reducer do ustawiania filtra. Przyjmuje aktualny stan i akcję, która zawiera nowe wartości filtra.
    setFilter: (state, action) => {
      return action.payload; // Nowe wartości filtra (np. wartość wyszukiwania).
    },
  },
});

// Eksportowanie akcji `setFilter` z obiektu zawierającego akcje slice'a.
export const { setFilter } = filterSlice.actions;

// Eksportowanie reducer'a z slice'a, który będzie obsługiwał akcje związane z filtrem.
export const filterReducer = filterSlice.reducer;
