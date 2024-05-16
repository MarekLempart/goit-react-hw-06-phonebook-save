// selectors.js

// Funkcja `getContacts` jest selektorem, który pobiera listę kontaktów ze stanu aplikacji.
// Przyjmuje stan aplikacji jako argument i zwraca listę kontaktów.
export const getContacts = state => state.contacts.items;

// Funkcja `getFilter` jest selektorem, który pobiera stan filtra ze stanu aplikacji.
// Przyjmuje stan aplikacji jako argument i zwraca stan filtra.
export const getFilter = state => state.filter;
