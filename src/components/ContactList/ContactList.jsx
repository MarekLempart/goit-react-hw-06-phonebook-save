// ContactList.jsx

// Importowanie hooków 'useDispatch' i 'useSelector' z 'react-redux', które pozwalają na korzystanie z Redux w komponencie funkcyjnym.
import { useDispatch, useSelector } from 'react-redux';
// Importowanie akcji 'deleteContact' z pliku 'contactsSlice' w celu usuwania kontaktu z listy.
import { deleteContact } from 'redux/contactsSlice';
// Importowanie selektorów 'getContacts' i 'getFilter' z pliku 'selectors' w celu pobrania listy kontaktów i wartości filtru ze stanu aplikacji.
import { getContacts, getFilter } from 'redux/selectors';
// Importowanie stylizowanych komponentów 'Button', 'Item', 'List', 'Text' z pliku 'ContactList.styled'.
import { Button, Item, List, Text } from './ContactList.styled';

// Deklaracja komponentu `ContactList`.
export const ContactList = () => {
  // Pobranie listy kontaktów ze stanu aplikacji za pomocą hooka useSelector i selektora getContacts.
  const contacts = useSelector(getContacts);
  // Pobranie wartości filtru ze stanu aplikacji za pomocą hooka useSelector i selektora getFilter.
  const filter = useSelector(getFilter);
  // Pobranie funkcji dispatch z hooka useDispatch.
  const dispatch = useDispatch();

  // Filtracja kontaktów na podstawie wartości filtrowania.
  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  // Funkcja obsługująca usuwanie kontaktu.
  const onDeleteContact = id => {
    dispatch(deleteContact(id)); // Wysłanie akcji 'deleteContact' z id kontaktu do reduktora za pomocą funkcji 'dispatch'.
  };

  // Sprawdzenie, czy lista kontaktów jest pusta. Jeśli tak, wyświetlenie odpowiedniego komunikatu.
  if (!filteredContacts?.length) {
    return <Text>No contacts found.</Text>;
  }

  // Zwrócenie JSX reprezentującego listę kontaktów.
  return (
    <List>
      {/* Mapowanie kontaktów i wyświetlenie ich na ekranie */}
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          {/* Wyświetlenie imienia i numeru kontaktu */}
          <Text>
            {name}: {number}
          </Text>
          {/* Przycisk do usuwania kontaktu */}
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
