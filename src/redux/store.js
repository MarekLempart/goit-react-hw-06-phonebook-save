// store.js

import { configureStore } from '@reduxjs/toolkit'; // Importuje funkcję configureStore z biblioteki Redux Toolkit, która jest używana do konfigurowania składowania Redux.
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist'; // Importuje różne akcje i funkcje z biblioteki redux-persist, która jest używana do trwałego przechowywania stanu Redux w localStorage.
import storage from 'redux-persist/lib/storage'; // Importuje storage z redux-persist/lib/storage, który jest używany jako domyślny magazyn danych do przechowywania stanu aplikacji w localStorage.
import { contactsReducer } from './contactsSlice'; // Importuje reduktor contactsReducer z pliku contactsSlice, który zarządza stanem kontaktów.
import { filterReducer } from './filterSlice'; // Importuje reduktor filterReducer z pliku filterSlice, który zarządza stanem filtru.

// Konfiguracja dla redux-persist, która określa klucz i magazyn danych do przechowywania stanu kontaktów.
const contactsConfig = {
  key: 'contacts',
  storage,
};

// Tworzy sklep Redux przy użyciu funkcji configureStore z Redux Toolkit.
export const store = configureStore({
  reducer: {
    // Konfiguruje persistReducer dla stanu kontaktów, aby przechowywać go trwale przy użyciu localStorage.
    contacts: persistReducer(contactsConfig, contactsReducer),
    // Ustawia reduktor filtra bez trwałego przechowywania.
    filter: filterReducer,
  },
  // Używa middleware, aby wyłączyć sprawdzanie serializacji dla określonych akcji Redux.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ignoruje określone akcje, aby uniknąć błędów serializacji przy zapisie do localStorage.
      },
    }),
});

// Tworzy persistor dla sklepu Redux, który jest używany do trwałego przechowywania stanu.
export const persistor = persistStore(store);
