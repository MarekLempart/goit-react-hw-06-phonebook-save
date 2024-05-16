// App.js

// Importowanie komponentu `ToastContainer` z biblioteki 'react-toastify', który służy do wyświetlania powiadomień.
import { ToastContainer } from 'react-toastify';
// Importowanie styli dla komponentu `ToastContainer`.
import 'react-toastify/dist/ReactToastify.css';
// Importowanie stylizowanych komponentów `MainHeader`, `SecondaryHeader` i `Section` z pliku 'App.styled'.
import { MainHeader, SecondaryHeader, Section } from './App.styled';
// Importowanie komponentu `ContactForm` z pliku 'ContactForm/ContactForm'.
import { ContactForm } from './ContactForm/ContactForm';
// Importowanie komponentu `ContactList` z pliku 'ContactList/ContactList'.
import { ContactList } from './ContactList/ContactList';
// Importowanie komponentu `Filter` z pliku 'Filter/Filter'.
import { Filter } from './Filter/Filter';

// Deklaracja komponentu `App`.
export const App = () => {
  // Zwracanie JSX zawierającego strukturę aplikacji.
  return (
    <Section>
      {/* Nagłówek główny aplikacji */}
      <MainHeader>Phonebook</MainHeader>
      {/* Formularz dodawania kontaktów */}
      <ContactForm />
      {/* Nagłówek dodatkowy dla sekcji kontaktów */}
      <SecondaryHeader>Contacts</SecondaryHeader>
      {/* Filtr do filtrowania kontaktów */}
      <Filter />
      {/* Lista kontaktów */}
      <ContactList />
      {/* Kontener dla powiadomień */}
      <ToastContainer position="top-center" />
    </Section>
  );
};
